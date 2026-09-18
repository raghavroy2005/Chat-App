import { Routes , Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"


const App = () => {
  return (
    <>
      <div className="bg-blue-300">
        <Routes>
          <Route  path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='profile' element={<ProfilePage/>} />
        </Routes>
      </div>
    </>
  )
}

export default App