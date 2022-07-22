 
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Shared/Login/Login";
import Register from "./Pages/Shared/Register/Register";

function App() {
  console.warn('Hello')
  return (
    <AuthProvider className="App"> 
      {/* <Home />  */}
      {/* <Login /> */}
      <Register/>
    </AuthProvider>
  );
}

export default App;
