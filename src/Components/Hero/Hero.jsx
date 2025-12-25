import './Hero.css'
import profile_img from "../../assets/profile_img.svg";
export const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="Profile" />
 
      <h1><span>I am Sandesh Singh</span>, frontend developer in India</h1>

      <p>
        Crafting engaging and user-friendly web experiences with React.js
        and modern frontend technologies.
      </p>

      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">Download Resume</div>
      </div>
    </div>
  )
}
