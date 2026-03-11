import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import NavBar from "./components/NavBar"
import Body from "./Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import { Provider, useDispatch } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./components/Feed"
import { BASE_URL } from "./utils/constants"
import { addUser } from "./utils/userSlice"
import { useEffect } from "react"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <ToastContainer position="top-right" autoClose={2000} />
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>

        </BrowserRouter>
      </Provider >
    </>
  )
}

export default App
