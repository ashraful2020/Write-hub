import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/Dashboard/DashboardHome";
import PostBlog from "./Pages/Dashboard/PostBlog/PostBlog"; 
import Profile from "./Pages/Dashboard/Profile/Profile";
import QuotePost from "./Pages/Dashboard/QuotePost/QuotePost";
import About from "./Pages/Home/About/About";
import Contact from "./Pages/Home/Contact.js/Contact";
import Home from "./Pages/Home/Home/Home";
import SinglePost from "./Pages/Home/SinglePost/SinglePost";
import Login from "./Pages/Shared/Login/Login";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import PrivateRoute from "./Pages/Shared/PrivateRoute/PrivateRoute";
import Register from "./Pages/Shared/Register/Register";
import Spinner from "./Pages/Shared/Spinner/Spinner";

function App() {
  const [pageLoading, setPageLoading] = useState(false);
  useEffect(() => {
    setPageLoading(true);
    setTimeout(() => {
      setPageLoading(false);
    }, 2000);
  }, []);

  return (
    <AuthProvider className="App">
      
      {pageLoading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post" element={<SinglePost />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/dashboard/post-blog" element={<PostBlog />} />
            <Route path="/dashboard/post-quote" element={<QuotePost />} />
            <Route path="/dashboard/profile" element={<Profile />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </AuthProvider>
  );
}

export default App;
