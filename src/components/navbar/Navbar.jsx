import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Portfolio</motion.span>
            <div className="social">
                <a href="https://www.linkedin.com/in/yashvanth-rv/"><img src="/linkedin.png" alt="linkedin"/></a>
                <a href="https://www.instagram.com/yashvanth_2752/"><img src="/instagram.png" alt="Instagram"/></a>
                <a href="https://dribbble.com/Yashvanth"><img src="/dribbble.png" alt="dribble"/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
