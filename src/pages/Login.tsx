import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: any) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center py-10 px-5">
      <div className="max-w-md w-full bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {typeof errors.email?.message === "string" &&
                  errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Password is required" })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {typeof errors.password?.message === "string" &&
                  errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
