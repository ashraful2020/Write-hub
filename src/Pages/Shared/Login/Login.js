import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../Assets/images/logo.png";
import useAuth from "../../../hooks/useAuth";
const Login = () => {
  const {
    signInWithGoogle,
    signInWithEmail,
    user,
    setUser,
    handleLogOut,
    setIsLoading,
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const uri = location?.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        setIsLoading(true);
        setUser(res?.user);
        navigate(uri);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // login user
    signInWithEmail(email, password)
      .then((res) => {
        setIsLoading(true);
        setUser(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const demoLogin = (e) => {
    const demoMail = "demo@demo.com";
    const demoPass = 123456;
    signInWithEmail(demoMail, demoPass)
      .then((result) => {
        setIsLoading(true);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-fuchsia-100 pt-10">
      <div className="backdrop-blur-5xl mx-auto  w-11/12 rounded-xl bg-white bg-opacity-20 p-5 text-center shadow-2xl md:w-1/2 lg:w-1/3">
        {user.email ? (
          <div>
            <p className="text-sm">User Name : {user.displayName} </p>
            <p className="text-sm">User Name : {user.email} </p>
            <button onClick={handleLogOut} className="bg-red-300 px-5 py-2">
              Log Out
            </button>
          </div>
        ) : (
          <p>Please Login</p>
        )}

        <p className="flex h-20 items-center justify-center gap-10 font-mono text-2xl font-bold md:text-4xl">
          <img src={logo} alt="" className=" h-12 md:h-16" />
          <span> Write Hub</span>
        </p>
        <p className="text-xl font-semibold md:text-3xl">Login Into Account </p>
        <p className="md:text-md text-sm text-gray-500">
          Use your credentials to access your account.
        </p>
        <form className="mx-auto" onSubmit={handleSubmit}>
          <input
            className="login-input"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
            required
          />
          <input
            className="login-input"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            required
          />
          <input className="login-submit" type="Submit" defaultValue="Submit" />
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
          Don't have an account?{" "}
          <Link to="/register" className=" underline">
            {" "}
            Register here
          </Link>
        </p>
        <button className="login-submit" onClick={demoLogin}>
          Demo Login
        </button>
      </div>
    </div>
  );
};

export default Login;
