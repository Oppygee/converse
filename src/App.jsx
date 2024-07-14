import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { userRoutes } from "./routes/userRoutes"
import Login from "./Login"
import Dashboard from "./Dashboard"
import Signup from "./Signup"

export default function App() {
  return (
    <Router>
      <Routes>
        {/* {userRoutes.map((userRoute, index) => (
          <Route
            key={index}
            path={userRoute.path}
            element={<userRoute.component />}
          />
        ))} */}
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}
