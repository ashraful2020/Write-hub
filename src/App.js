import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import PostBlog from "./Pages/Dashboard/PostBlog/PostBlog";
import PostBlog1 from "./Pages/Dashboard/PostBlog/PostBlog1";
import PostBlog2 from "./Pages/Dashboard/PostBlog/PostBlog2";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Shared/Login/Login";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import PrivateRoute from "./Pages/Shared/PrivateRoute/PrivateRoute";
import Register from "./Pages/Shared/Register/Register";

function App() {
  return (
    <AuthProvider className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/dashboard/post-blog" element={<PostBlog />} />
          <Route path="/dashboard/post-blog1" element={<PostBlog1 />} />
          <Route path="/dashboard/post-blog2" element={<PostBlog2 />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
