import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");

    loginUser(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  const handleGoogleLogin = () => {
    setError("");
    googleLogin()
      .then(() => {
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 my-6">
      <div className="bg-white shadow-lg p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gradient">
          Login Your Account
        </h2>

        <form onSubmit={handleLogin}>
          <div className="form-control w-full">
            <label className="label mb-2">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control w-full mb-4">
            <label className="label my-2">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <button
            className="bg-gradient-to-r from-[#0070FF] via-[#00A8FF] to-[#66CCFF] text-white font-semibold px-6 py-3 mt-4 rounded-full shadow-md transition w-full
            hover:brightness-110 cursor-pointer"
          >
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="btn bg-white text-black border-[#e5e5e5] mt-6 w-full rounded-full py-6"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>

        <p className="mt-4 text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-gradient">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
