import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Links = () => (
    <div className='flex justify-between items-center sm:max-w-[300px] gap-11'>
        <div>
        <a href="https://www.linkedin.com/in/ali-ahmed-92b959284" alt="LinnkedIn" className=""><BsLinkedin size='30px' color='#e14f10' /></a>
        </div>
        <div>
        <a href="/" alt="Facebook" className=""><FaFacebook size='30px' color='#e14f10' /></a>
        </div>
        <div>
        <a href="https://github.com/Alooh99" alt="Github"  className=""><FaGithub size='30px' color='#e14f10' /></a>
        </div>
        <div>
        <a href="https://www.instagram.com/3l99.x" alt="Instagram"  className=""><BsInstagram size='30px' color='#e14f10' /></a>
        </div>
    </div>
)

export default Links