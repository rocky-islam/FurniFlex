import image from "../../images/hero-image.png";
import funiFlexImg from "../../images/funiflex-img.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
// import auth from "../../firebase/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
// import { createUserWithEmailAndPassword } from "firebase/auth/cordova";



const Signup = () => {

  const {createUser} = useContext(AuthContext);

    const [errorMessage, setErrorMessage] = useState('');
    const [passError, setPassError] = useState('');
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();

        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const fullName = firstName+' '+lastName;
        console.log(fullName, email, password);

        if(password.length < 6){
            setPassError('Password should be 6 Character');
            return;
        }

        setErrorMessage('')

        // create user
        createUser(email, password)
        .then((result) => {
            console.log(result.user);
            updateProfile(result.user, {
                displayName : fullName
            })
            .then(() =>{
                console.log('Profile Update')
            })
            .catch(err =>{
                console.log(err)
            })
        })
        .catch(er => {
            console.log(er);
            setErrorMessage(er.message);
            setPassError(er.message)
        })
        
    }
  return (
    <div>
      <div className="flex bg-white">
        <div className="flex w-full">
          <div className="flex items-center justify-center h-screen w-2/4">
            <div className="h-[618px] w-[500px] bg-[#f5f5f5] px-5 py-1 rounded-lg">
              <div className="flex items-center flex-col ">
                <h3 className="text-2xl font-semibold">Welcome To</h3>
                <h1 className="font-bold text-[40px]">
                  Furni<span className="text-[#4977EE]">Flex</span>
                </h1>
                <p className="font-medium text-[#707070]">
                  Signup for purchase your desire products
                </p>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                
                  <div className="flex gap-4">
                    <label className="form-control w-2/4 ">
                      <div className="label">
                        <span className="label-text">
                          First name (Optional)
                        </span>
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                      />
                    </label>
                    <label className="form-control w-2/4 ">
                      <div className="label">
                        <span className="label-text">Last name (Optional)</span>
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Email Address</span>
                    </div>
                    <input
                      type="email"
                      required
                      name="email"
                      placeholder="Email Address"
                      className="input input-bordered w-full"
                    />
                    <div>{errorMessage && <p className="text-red-600">Email Already Used</p>}</div>
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
                    <div>{passError && <p className="text-red-600">{passError}</p>}</div>
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
                    Signup
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
              <h1 className="font-medium text-sm text-center mt-2">Have an account? <span className="text-blue-500"><Link to={'/signin'}>Sign In</Link></span> </h1>
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

export default Signup;
