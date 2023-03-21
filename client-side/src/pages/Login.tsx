import LoginForm from "../components/LoginForm";

const Login = () => {
    return (
        <div className="p-[12px]">
            <div className="flex justify-end h-screen bg-bg-login bg-center bg-cover bg-no-repeat rounded-2xl">
                <LoginForm/>
            </div>
        </div>
    )
}

export default Login;