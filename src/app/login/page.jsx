import LoginForm from "@/components/loginForm/page";

export default function Login() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Login Here
            </h2>
          </div>

          {/* Login form */}
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
}
