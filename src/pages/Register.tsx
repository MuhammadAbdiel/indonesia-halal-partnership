import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineLoading } from "react-icons/ai";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { logoPartnership } from "../assets";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ fullName: string; email: string; password: string }>();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const { register: authRegister } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: {
    fullName: string;
    email: string;
    password: string;
  }) => {
    try {
      setIsLoading(true);
      await authRegister(data.fullName, data.email, data.password);
      navigate("/main-dashboard");
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center justify-start gap-4 py-10 px-5">
      <div className="flex justify-center">
        <div className="bg-white rounded-full p-4 shadow-lg animate-fade-up">
          <img
            src={logoPartnership}
            alt="Partnership Logo"
            className="w-32 h-32"
          />
        </div>
      </div>

      <div className="max-w-md w-full bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              {...register("fullName", {
                required: "Nama Lengkap wajib diisi",
              })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {typeof errors.fullName?.message === "string" &&
                  errors.fullName.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email wajib diisi" })}
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
                {...register("password", { required: "Password wajib diisi" })}
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
            disabled={isLoading}
            className="w-full bg-gray-800 text-white flex justify-center items-center font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 transition"
          >
            {isLoading ? (
              <AiOutlineLoading size={20} className="animate-spin" />
            ) : (
              "Register"
            )}
          </button>

          <div className="flex justify-center mt-4">
            <p className="text-gray-600">
              Sudah punya akun? <Link to="/login" className="text-blue-500">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
