import {useState} from "react"
import ChatContainer from "../components/ChatContainer"
import Sidebar from "../components/Sidebar"
import RightSidebar from "../components/RightSidebar"


const HomePage = () => {

    const [selectedUser, ] = useState(false)
  return (
    <div className="border w-full h-screen">
       <div className={`backdrop-blue-xl border-2 border-gray-600 rounded-2xl overflow-hidden
       h-full grid grid-cols-1 relative ${selectedUser ?
       'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]':'md:grid-cols-2'}`}>
            <Sidebar/>
            <ChatContainer/>
            <RightSidebar/>
       </div>
    </div>
  )
}

export default HomePage