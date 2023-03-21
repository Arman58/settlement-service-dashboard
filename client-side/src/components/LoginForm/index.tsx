import React, {useState} from "react";
import {Link} from "react-router-dom";
import InputField from "../shared/InputField";

const LoginForm = () => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e: any) => {
        setInputValue(e.target.value);
        console.log(inputValue);
    };

    return (
        <div className="bg-white w-2/5 rounded-xl rounded-r-none">
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-url">
                <div className="w-full max-w-md space-y-8">
                    <div className="flex flex-col">
                        <img
                            className="w-[160px] h-11 mb-[50px]"
                            src="./assets/kapu.png"
                            alt="kapu"
                        />
                        <span className="mt-6 text-3xl font-bold leading-10 text-neutral-600 font-nunito">
                        Login to your Account
                    </span>
                        <span className="text-neutral-600 text-base	">See what is going on with the business</span>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            ------------- Or{' '}
                            Sign in with Email
                            -------------
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true"/>
                        <div className="-space-y-px rounded-md shadow-sm">
                            <InputField label="Email" name="email" type="email" value={inputValue}
                                        onChange={handleChange} placeholder="@mai.ru"/>
                            <InputField label="Password" name="password" type="password" value={inputValue}
                                        onChange={handleChange} placeholder="********"/>

                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 accent-green text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm text-green">
                                <Link to="#" className="font-medium hover:text-indigo-500">
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full rounded-md bg-green py-3 text-white font-nunito font-extrabold"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;