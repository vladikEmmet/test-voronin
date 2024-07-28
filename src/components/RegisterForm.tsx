import React, {FC, useState} from 'react';
import {UserService} from "../services/user.service";
import {useNavigate} from "react-router-dom";
import {Input} from "./UI/Input";
import {Label} from "./UI/Label";
import {Button, ButtonVariant} from "./UI/Button";
import {isValidEmail, isValidName} from "../utils/validateUserData";

interface RegisterFormProps {
    onChangeType: () => void;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RegisterForm: FC<RegisterFormProps> = ({onChangeType, setLoading}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            setLoading(true);
            e.preventDefault();

            if(!isValidEmail(email)) {
                setError('Invalid email');
                return;
            }

            if(!isValidName(name)) {
                setError('Invalid name');
                return;
            }

            const user = {
                email,
                password,
                name
            };

            const response = await UserService.register(user);
            const {email: userEmail} = response;

            const loginResponse = await UserService.login({email: userEmail, password});
            localStorage.setItem('access_token', loginResponse.access_token);
            navigate('/');
        } catch(err: any) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form className='flex flex-col gap-5' onSubmit={handleRegister}>
            <div>
                <Label htmlFor='email'>Email</Label>
                <Input
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required={true}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
            </div>

            <div>
                <Label htmlFor='name'>Name</Label>
                <Input
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={true}
                    minLength={2}
                />
            </div>

            <div>
            <Label htmlFor='password'>Password</Label>
                <Input
                    id='password'
                    type='password'
                    value={password}
                    required={true}
                    minLength={4}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            {error && <p className='text-red-500'>{error}</p>}

            <div className='flex mt-1 gap-2'>
                <Button type="submit">Sign Up</Button>
                <Button variant={ButtonVariant.Link} onClick={onChangeType}>Sign In</Button>
            </div>
        </form>
    );
};