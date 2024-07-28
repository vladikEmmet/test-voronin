import React, {useState} from 'react';
import {AuthType} from "../types/auth.type";
import {LoginForm} from "../components/LoginForm";
import {RegisterForm} from "../components/RegisterForm";
import {Loader} from "../components/UI/Loader";

export const LogInScreen = () => {
    const [type, setType] = useState<AuthType>(AuthType.LOGIN);
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <div
                className='p-10 w-full max-w-sm md:max-w-md lg:max-w-lg border rounded bg-[#F9F9F9] shadow-xl flex flex-col justify-center'
            >
                {
                    loading ?
                        (
                            <Loader />
                        ) : (
                            <>
                                <h1 className='font-bold text-2xl mb-3'>{type === AuthType.REGISTER ? "Sign Up" : "Sign In"}</h1>
                                {
                                    type === AuthType.LOGIN ? (
                                        <LoginForm
                                            onChangeType={() => setType(AuthType.REGISTER)}
                                            setLoading={setLoading}
                                        />
                                    ) : (
                                        <RegisterForm
                                            onChangeType={() => setType(AuthType.LOGIN)}
                                            setLoading={setLoading}
                                        />
                                    )
                                }
                            </>
                        )
                }
            </div>
        </div>
    );
};