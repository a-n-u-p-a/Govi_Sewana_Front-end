import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe, faMapMarkerAlt, faPhone} from '@fortawesome/free-solid-svg-icons';
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube} from 'react-icons/fa';

const Footer = () => {
  return (
        <div style={{width: '100%'}} className={"mt-10"}>
            <div className="bg-gradient-to-b from-green-600 to-green-900 border-t-4" style={{ backgroundImage: 'linear-gradient(#027A48, #012616)' }}>

                <div className="flex justify-around py-4">

                    <div style={{width: '15%'}} className={"flex items-center justify-center"}>
                        <div className="flex items-center justify-center">
                            <FontAwesomeIcon icon={faGlobe} className="text-white text-2xl mr-2"/>
                            <h1 className="text-black font-bold">Govi Sewana</h1>
                        </div>
                    </div>

                    <div style={{width: '15%'}} className={"flex items-center justify-center"}/>

                    <div style={{width: '40%'}}>
                        <p className="flex items-center text-white">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white mr-5"/>
                            345 Faulconer Drive, Suite 4 • Bambalapitiya, Sri Lanka
                        </p>

                        <p className="flex items-center mt-2 text-white">
                            <FontAwesomeIcon icon={faPhone} className="text-white mr-3"/>
                            +94 766 760 760
                        </p>
                    </div>

                    <div style={{width: '25%'}}>

                        <div className="flex items-center">
                            <p className="text-white mr-1">Social media:</p>
                            <a href="https://facebook.com" target="_blank" className={"text-white mr-2"}
                            rel="noopener noreferrer"><FaFacebookF/></a>
                            <a href="https://twitter.com" target="_blank" className={"text-white mr-2"}
                            rel="noopener noreferrer"><FaTwitter/></a>
                            <a href="https://linkedin.com" target="_blank" className={"text-white mr-2"}
                            rel="noopener noreferrer"><FaLinkedinIn/></a>
                            <a href="https://youtube.com" target="_blank" className={"text-white mr-2"}
                            rel="noopener noreferrer"><FaYoutube/></a>
                        </div>

                        <div className="flex flex-col mt-2">
                            <p className="text-white">Email us: support.govisewana@gmail.com</p>
                        </div>

                    </div>

                </div>

                <div className="flex flex-row items-center">

                    <div style={{width: "76%"}}>
                        <a href="/about-us" className={"m-2 text-white mr-10"}>ABOUT US</a>
                        <a href="/contact-us" className={"m-2  text-white mr-10"}>CONTACT US</a>
                        <a href="/help" className={"m-2 text-white mr-10"}>HELP</a>
                        <a href="/privacy-policy" className={"m-2  text-white mr-10"}>PRIVACY POLICY</a>
                        <a href="/disclaimer" className={"m-2 text-white mr-10"}>DISCLAIMER</a>
                    </div>

                    <div style={{width: "27%"}}>
                        <p className="text-white m-2">Copyright © 2023. GoviSewana.ltd</p>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default Footer