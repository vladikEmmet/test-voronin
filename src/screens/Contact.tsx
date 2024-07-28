import React, { useState } from 'react';
import { Input } from "../components/UI/Input";
import { Label } from "../components/UI/Label";
import { Button } from "../components/UI/Button";
import { FileService } from "../services/file.service";

const MAX_FILE_SIZE_MB = 50;

export const Contact = () => {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const uploadFile = async (file: File) => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            throw new Error("Unauthorized: No token provided");
        }

        return await FileService.upload(file, token);
    }

    const resetErrorAndSuccess = () => {
        setError(null);
        setSuccess(null);
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        resetErrorAndSuccess();
        const selectedFile = event.target.files?.[0];
        setFile(selectedFile || null);
    };

    const validateFileSize = (file: File) => {
        const maxSize = MAX_FILE_SIZE_MB * 1024 * 1024;
        return file.size > maxSize;
    }

    const handleUploadClick = async () => {
        resetErrorAndSuccess();
        if (file) {
            if (validateFileSize(file)) {
                setError('Размер файла превышает 50MB.');
                return;
            }
            setError(null);
            try {
                const data = await uploadFile(file);
                setSuccess(data.success);
            } catch (err: any) {
                setError(err.message);
            }
        } else {
            setError('Пожалуйста, выберите файл для загрузки.');
        }
    };

    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get started with Transcribe</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Upload your first video and let our AI-powered transcription engine do the rest.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="video">Upload Video</Label>
                        <Input id="video" type="file" onChange={handleFileChange} />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        {success && <p className="text-green-500 text-sm">{success}</p>}
                    </div>
                    <Button onClick={handleUploadClick}>Transcribe Video</Button>
                </div>
            </div>
        </section>
    );
};
