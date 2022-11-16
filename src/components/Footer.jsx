import React from "react"
import footerLogo from "../assets/images/Footer/icpep-logo-footer.png"
import joebot from "../assets/images/Footer/joebot.png"
import { BsFacebook, BsTwitter, BsInstagram, BsDiscord } from "react-icons/bs"

export default function Footer () {
    return (
        <div className="bg-black text-white py-12 px-4 lg:px-16 ''">
          <div className="lg:flex justify-between">
            <div className="flex flex-col">
              <div className="flex flex-col lg:flex-row justify-center items-center">
                <img src={footerLogo} className="w-[80px] lg:w-[160px]" alt="icpep-footer" />
                <div className="lg:my-4 mx-4">
                  <h1 className="font-semibold text-center text-xl lg:text-2xl lg:text-left">Institute of Computer Engineers of the Philippines</h1>
                  <h1 className="font-light text-center text-sm lg:text-lg lg:text-left">University of Science and Technology of Southern Philippines</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:divide-x items-center lg:flex-row lg:mr-20">
                <div className="flex items-center justify-center my-6">
                  <img src={joebot} width={40} alt="joebot" />
                  <div className="my-auto ml-2 lg:text-sm font-medium">
                    <a href="https://icpepse-ustp.org" rel="no_referer">
                      icpepse-ustp.org <span className="text-md invisible">|</span>
                    </a>
                  </div>
                </div>
                <div className="flex lg:flex-row">
                  <div className="flex gap-x-3 my-auto ml-2">
                    <a
                      href="https://www.facebook.com/icpep.se.ustp"
                      rel="no_referer"
                    >
                      <BsFacebook size={25} />
                    </a>
                    <a href="https://twitter.com/ustp_icpepse" rel="no_referer">
                      <BsTwitter size={25} />
                    </a>
                    <a
                      href="https://www.instagram.com/ustp_icpep_se"
                      rel="no_referer"
                    >
                      <BsInstagram size={25} />
                    </a>
                    <a href="https://discord.gg/Dc9dJ7hfDD" rel="no_referer">
                      <BsDiscord size={25} />
                    </a>
                  </div>
                </div>
            </div>
          </div>
          
          <div className="flex flex-col font-light text-md justify-center text-center gap-y-1 mt-16">
            <div className="border-t-2 w-[100px] mx-auto"></div>
            <p className="">&#169; Copyright 2022. All rights reserved.</p>
          </div>
        </div>
      );
}