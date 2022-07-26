import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/images/logo.png";
import useAuth from "../../../hooks/useAuth";
const Register = () => {
  const {
    signInWithGoogle,
    signUpWithEmail,
    user,
    handleLogOut,
    saveUserName,
    setIsLoading,
    setUser,
    signInWithEmail,
  } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const handleGoogleLogin = () => {
    signInWithGoogle()
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
  const handleSubmit = (e) => {
    e.preventDefault();
 
    // Create user
    signUpWithEmail(email, password)
      .then((result) => {
        setIsLoading(true);
        saveUserName(name);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const demoRegister = (e) => {
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
      <div className="backdrop-blur-5xl mx-auto  w-11/12 rounded-xl bg-gray-50 bg-opacity-20 p-5 text-center shadow-2xl md:w-1/2 lg:w-1/3">
        {/* {user.email ? (
          <div>
            <p className="text-sm">User Name : {user.displayName} </p>
            <p className="text-sm">User Name : {user.email} </p>
            <button onClick={handleLogOut} className="bg-red-300 px-5 py-2">
              Log Out
            </button>
          </div>
        ) : (
          <p>Please Login</p>
        )} */}

        <p className="flex h-20 items-center justify-center gap-10 font-mono text-2xl font-bold md:text-4xl">
          <img src={logo} alt="" className=" h-12 md:h-16" />
          <span> Write Hub</span>
        </p>
        <p className="text-xl font-semibold md:text-3xl">Create an account </p>
        <p className="md:text-md text-sm text-gray-500">
          Setup a new account in a minute.
        </p>
        <form className="mx-auto" onSubmit={handleSubmit}>
          <input
            className="login-input"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="name"
            required
            />
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
          Already have an account?  <Link to="/login" className=" underline"> Login here</Link>
        </p>
        <button className="login-submit" onClick={demoRegister}>
          Demo Register
        </button>
      </div>
    </div>
  );
};

export default Register;
