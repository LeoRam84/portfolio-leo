import { Container } from ".."
import { FaGithub, FaVoicemail, FaLinkedin } from 'react-icons/fa'
import { AiFillMail } from "react-icons/ai"

import { socials } from "../../data/socials.json"
import usersInfo from "../../data/usersInfo.json"

function Footer() {

  return (
    <div id="footer" className="relative w-screen h-[35vh] py-5 px-3 bg-dark-300 ">
      <Container>
        <div className="relative flex flex-row ml-2 items-center justify-between">
          <div className="left flex flex-row">
            <h1 className=" text-[15px] ">
              <span className="font-extrabold">{usersInfo.github_username}</span>
            </h1>
            <small className="ml-[20px] text-white-200 ">
              &copy; {new Date().getFullYear()} Todos os direitos reservados.
            </small>
          </div>
          <div className="right">
            <div className="socials flex flex-row items-center justify-center">
              {socials["linkedin"] !== "" && <SocialLink url={socials["linkedin"]} children={<FaLinkedin />} />}

              {socials["github"] !== "" && <SocialLink url={socials["github"]} children={<FaGithub />} />}

              {socials["email"] !== "" && <EmailLink url={socials["email"]} children={<AiFillMail />} />}
            </div>
          </div>

          {/* Leave this just to give some credits about the maker */}
        </div>
      </Container>
      <Refer />
    </div>
  )
}

export default Footer

function SocialLink({ url, children }) {

  return (
    <a href={url} target="_blank" className=" no-underline text-white-100 decoration-none hover:text-white-100 mr-4 ">
      {children}
    </a>
  )
}

function EmailLink({ url, children }) {

  return (
    <a href={`mailto:${url}`}  target="_blank" className=" no-underline text-white-100 decoration-none hover:text-white-100 mr-4 ">
      {children}
    </a>
  )
}

function Refer() {
  return (
    <div className="w-screen flex flex-row items-center justify-center absolute bottom-[100px] mx-auto md:bottom-[10px]">
      <span className="py-2 text-[12px] text-white-200 ">
        Criado com 💖 por <a target="_blank" href="https://github.com/LeoRam84" className="text-green-200 underline hover:text-green-200">Leonardo Ramidan</a>
      </span>
    </div>
  )
}