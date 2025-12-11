import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router";

const Register = () => {
  const { registerUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");

  const imageBBKey = import.meta.env.VITE_ImageBB_Key;

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const imageFile = e.target.photo.files[0];

    setError("");

    const formData = new FormData();
    formData.append("image", imageFile);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${imageBBKey}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const imgData = await res.json();

    if (!imgData.success) {
      setError("Image upload failed!");
      return;
    }

    const photoURL = imgData.data.url;

    registerUser(email, password)
      .then(() => {
        return updateUserProfile(name, photoURL);
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 scroll-py-1.5 my-5">
      <div className="bg-white shadow-lg p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gradient">
          Create Your Account
        </h2>

        <form onSubmit={handleRegister}>
          <div className="form-control w-full">
            <label className="label mb-2">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label my-2">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label my-2">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control w-full mb-3">
            <label className="label my-2">
              <span className="label-text">Upload Profile Photo</span>
            </label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              className="file-input file-input-bordered w-full"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button
            type="submit"
            className="bg-gradient-to-r from-[#0070FF] via-[#00A8FF] to-[#66CCFF] text-white font-semibold px-6 py-3 mt-4 rounded-full shadow-md transition w-full
            hover:brightness-110 cursor-pointer"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-gradient">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
