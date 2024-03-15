import Image from "next/image";
import "./Navbar.css"
import Profile from "../../public/Laura.jpg"


export default function Navbar(){
  return(
    <>
    <nav className="text" >
      <Image src={Profile} alt="Laura SMITH" className="Profile" width={317} height={317} />

      <h1>Laura SMITH</h1>
      <h3>Frontend Developer</h3>
      <h4>laurasmith.website</h4>

      <div className="buton">
          <button className="email">
            <img className="icon1" src="./Icon.png" alt="logo" />
            Email
          </button>
          <button className="linkedin">
            {" "}
            <img
              className="icon2"
              src="linkedin.png"
              alt="logo"
            />
            LinkedIn
          </button>
          
        </div>

      <h2 className="about">About</h2>
      
      <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.

          
          <br />
          <br />
        </p>
      

      <h2>Interest</h2>
      <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
    </nav>
    </>
  )

}  

