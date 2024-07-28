import React, {FC, useState} from 'react';
import {UserService} from "../services/user.service";
import {useNavigate} from "react-router-dom";
import {Input} from "./UI/Input";
import {Label} from "./UI/Label";
import {Button, ButtonVariant} from "./UI/Button";
import {isValidEmail} from "../utils/validateUserData";

interface LoginFormProps {
    onChangeType: () => void;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginForm: FC<LoginFormProps> = ({onChangeType, setLoading}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            setLoading(true);
            e.preventDefault();
            if(!isValidEmail(email)) {
                setError('Invalid email');
                return;
            }

            const user = {
                email,
                password,
            };

            const response = await UserService.login(user);
            const {access_token} = response;

            localStorage.setItem('access_token', access_token);
            navigate('/');
        } catch(err: any) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form className='flex flex-col gap-5' onSubmit={handleLogin}>
            <div>
                <Label htmlFor='email'>Email</Label>
                <Input
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required={true}
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
                <Button type="submit">Sign In</Button>
                <Button variant={ButtonVariant.Link} onClick={onChangeType}>Sign Up</Button>
            </div>
        </form>
    );
};