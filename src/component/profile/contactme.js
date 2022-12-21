import React from "react";
import {
    FaFacebook,
    FaGithub,
    FaLinkedin,
     
    FaYoutube
  } from "react-icons/fa";
  import {FaUserAlt,FaEnvelope,FaPhone,FaXing } from "react-icons/fa";

  import  propTypes  from "prop-types"

const Contactme =({name,imgg,phone,email,skills}) =>{
  return (
    <div className="contact">
      <div className="top">
        
        <p className="name"> <FaUserAlt style={{size:'5px'}}/> {name} </p>

        <img className="circle-img"  src={imgg} alt="ct" />
       

      </div>
      <div className="bottom">
        <p className="info"><FaEnvelope style= {{size:'5px'}}/>{email}</p>
        <p className="info"><FaPhone/>{phone}</p>

        <p className="info"><FaXing />{skills} </p>  
        <a className="info" href="https://www.facebook.com/hajj.joura.16/" style={{
      paddingLeft: "5px",
      fontSize: "22px",
      textDecoration: "none"
    }}>
          <span style={{ color: "black" }}>
            <FaFacebook />
          </span>
        </a>
        
        <a className="info" href="https://github.com/kerhajer" style={{
      paddingLeft: "5px",
      fontSize: "22px",
      textDecoration: "none"
    }}>
          <span className="icon fa fa-github" style={{ color: "black" }}>
            <FaGithub />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/hajer-kerkeni-18a31bb2/"
          style={{
            paddingLeft: "5px",
            fontSize: "22px",
            textDecoration: "none"
          }}
        >
          <span
            className="icon fa fa-linkedin-square"
            style={{ color: "black" }}
          >
            <FaLinkedin />
          </span>
        </a>
        <a href="https://www.youtube.com/" style={{
      paddingLeft: "5px",
      fontSize: "22px",
      textDecoration: "none"
    }}>
          <span style={{ color: "black" }}>
            <FaYoutube />
          </span>
        </a>



      </div>
    </div>
  );
}
Contactme.propTypes ={
  name : propTypes.string.isRequired,
  imgg: propTypes.string,
  phone: propTypes.number,
  email: propTypes.string,
 skills:propTypes.string,

 
}

Contactme.defaultProps = {
  name:'user'
}


export default Contactme;

