import image from "../../images/hero-image.png";
import funiFlexImg from "../../images/funiflex-img.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import auth from "../../firebase/firebase.config";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Signin = () => {

    const {logIn} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        // sign in
        logIn(email, password)
        .then(result =>{
            console.log(result.user)
            e.target.reset();
            navigate('/store');
        })
        .catch(err =>{
            console.log(err);
        })
    }

  return (
    <div>
      <div className="flex bg-white">
        <div className="flex w-full">
          <div className="flex items-center justify-center h-screen w-2/4">
            <div className="h-[618px] w-[500px] bg-[#f5f5f5] px-5 py-1 rounded-lg">
              <div className="flex flex-col my-8">
                <h3 className="text-3xl font-semibold">Welcome Back!</h3>
                <p className="font-medium text-[#707070] text-base">
                  Enter your Credentials to access your account
                </p>
              </div>
              <div>
                <form onSubmit={handleLogin}>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Email Address</span>
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="input input-bordered w-full"
                    />
                  </label>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Your Password</span>
                    </div>
                    <span className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Your Password"
                      required
                      className="input input-bordered w-full"
                      
                    />
                    <span onClick={() => setShowPassword(!showPassword)} className="absolute right-[2%] top-[35%] cursor-pointer text-xl">
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                    </span>
                    <div className="label flex justify-end">
                      <span className="label-text-alt font-medium text-[#1E99F5]">Forgot Password</span>
                    </div>
                  </label>
                  <div className="form-control">
                    <label className="cursor-pointer flex gap-3 mt-2">
                      <input type="checkbox" className="checkbox" />
                      <span className="font-medium text-sm">
                        I agree to the Terms & Policy
                      </span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="text-center bg-black text-white w-full font-semibold text-lg py-2 rounded-lg my-4"
                  >
                    Sign In
                  </button>
                </form>
              </div>
              <div className="divider">OR</div>
              <div>
                <div className="flex gap-4">
                  <button className="border-2 rounded-lg w-2/4 flex py-3 items-center justify-center text-xs font-medium">
                    <FcGoogle size={23} />
                    <span className="ml-1">Sign in with Google</span>
                  </button>
                  <button className="border-2 rounded-lg w-2/4 flex py-3 items-center justify-center text-xs font-medium">
                    <FaApple size={23} />
                    <span className="ml-1">Sign in with Apple</span>
                  </button>
                </div>
              </div>
              <h1 className="font-medium text-sm text-center mt-2">
                Haven't an account?
                <span className="text-blue-500">
                  <Link to={"/"}>Sign Up</Link>
                </span>{" "}
              </h1>
            </div>
          </div>
          <div
            className="hero min-h-screen w-2/4  bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <div className="flex justify-center">
                  <img src={funiFlexImg} alt="" className="text-center" />
                </div>
                <p className="mb-5">
                  Discover a seamless shopping experience with our curated
                  collection of products. From fashion to electronics, we bring
                  quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
