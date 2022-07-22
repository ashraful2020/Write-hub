import React from "react";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../Assets/images/logo.png";
const Login = () => {
  const { signInWithGoogle, user } = useAuth();
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-fuchsia-100 pt-10">
      <div className="backdrop-blur-5xl mx-auto  w-11/12 bg-gray-50 bg-opacity-20 p-5 text-center shadow-2xl md:w-1/2 lg:w-1/3 rounded-xl">
        <p className="text-sm">User Name : {user.displayName} </p>

        <p className="flex h-20 items-center justify-center gap-10 font-mono text-2xl font-bold md:text-4xl">
          <img src={logo} alt="" className=" h-12 md:h-16" srcset="" />
          <span> Write Hub</span>
        </p>
        <p className="text-xl font-semibold md:text-3xl">Login Into Account </p>
        <p className="md:text-md text-sm text-gray-500">
          Use your credentials to access your account.
        </p>
        <form className="mx-auto">
          <input className="login-input" type="text" placeholder="name" />
          <input className="login-input" type="email" placeholder="email" />
          <input
            className="login-input"
            type="password"
            placeholder="password"
          />
          <input className="login-submit" type="Submit" value="Submit" />
        </form>
        <div className="mt-2 flex items-center justify-evenly">
          <hr className="w-2/5 font-black" />
          Or
          <hr className="w-2/5 font-black" />
        </div>
        <button onClick={handleGoogleLogin} className="login-submit">
          <ion-icon name="logo-google"></ion-icon>
          Sign in with Google
        </button>
        <p>
          Don't have an account? <small> Register here</small>
        </p>
        <button className="login-submit">Demo Login</button>
      </div>
    </div>
  );
};

export default Login;
