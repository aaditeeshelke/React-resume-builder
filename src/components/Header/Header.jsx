import React from 'react'
import styles from "./header.module.css";
import resumebuilding from "../../assets/resume.jpeg";

const Header = () => {
  return (
    <div className={styles.Header_main_container}>
       <div className={styles.Header_starting_content}>
       Craft Your<span>Resume</span> here and  Build Your Professional Profile  
       </div>
       <img src={resumebuilding} alt='resume building image' />
    </div>
  )
}

export default Header;