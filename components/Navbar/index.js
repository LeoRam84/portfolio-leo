import React, { useEffect, useState } from "react"

import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import usersInfo from "../../data/usersInfo.json"
import { socials } from "../../data/socials.json"
import avatar from "../../public/images/avatar/avatar.png"
import { FaGlobe } from "react-icons/fa"; // Ícone de globo para tradução

function NavBar() {
    useEffect(() => {
        // Verifica se o script já foi adicionado para evitar duplicatas
        if (!document.getElementById("google-translate-script")) {
            const script = document.createElement("script");
            script.id = "google-translate-script"; // Define um ID para identificação única
            script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.body.appendChild(script);

            // Função para inicializar o Google Translate
            window.googleTranslateElementInit = function () {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: "pt", // Idioma original da página
                        includedLanguages: "en,pt", // Idiomas disponíveis
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE, // Layout padrão
                    },
                    "google_translate_element" // ID do elemento onde será renderizado
                );
            };
        }
    }, []);

    // Função para mostrar/ocultar o widget
    const toggleTranslate = () => {
        const translateElement = document.getElementById("google_translate_element");
        if (translateElement.style.display === "none") {
            translateElement.style.display = "block";
        } else {
            translateElement.style.display = "none";
        }
    };

    return (
        <React.Fragment>
            <div className={`navbar relative h-auto w-full flex align-center justify-between py-[20px]`}>
                <div className={`left w-auto flex align-start items-start justify-start px-[10px] `}>
                    <p className={`font-extrabold mr-[20px]`}>{usersInfo.github_username.charAt(0).toUpperCase() + usersInfo.github_username.slice(1)}</p>

                    <ul className={`relative ml-[10px] hidden md:flex`}>
                        <li className={`mt-[5px] mr-[10px] mb-[0px] ml-[10px] transition-all hover:text-green-100 hover:font-extrabold cursor-pointer text-[12px]`}>
                            <Link href="/">Início</Link>
                        </li>
                        <li className={`mt-[5px] mr-[10px] mb-[0px] ml-[10px] transition-all hover:text-green-100 hover:font-extrabold cursor-pointer text-[12px]`}>
                            <Link href="/about">Quem sou eu ?</Link>
                        </li>
                        <li className={`mt-[5px] mr-[10px] mb-[0px] ml-[10px] transition-all hover:text-green-100 hover:font-extrabold cursor-pointer text-[12px]`}>
                            <Link href="/projects">Projetos</Link>
                        </li>
                        <li className={`mt-[5px] mr-[10px] mb-[0px] ml-[10px] transition-all hover:text-green-100 hover:font-extrabold cursor-pointer text-[12px]`}>
                            <Link href="#contact">Contato</Link>
                        </li>
                    </ul>
                </div>
                <div className={`relative right w-[50vmin] hidden md:flex `}>
                    <ul className={`flex flex-row align-center justify-between items-center`}>
                        {socials["linkedin"] !== "" &&
                            <a href={socials["linkedin"]} target="_blank" className={`w-[100px] text-[17px] flex flex-row align-center justify-center items-center decoration-none  hover:text-white `}>
                                <FaLinkedin className={`mr-[10px] `} />
                                <small>Linkedin</small>
                            </a>}

                        {socials["github"] !== "" &&
                            <a href={socials["github"]} target="_blank" className={`w-[100px] text-[17px] flex flex-row align-center justify-center items-center decoration-none  hover:text-white `}>
                                <FaGithub className={`mr-[10px] `} />
                                <small>Github</small>
                            </a>}

                        {socials["email"] !== "" &&
                            <a href={`mailto:${socials["email"]}`} className={`w-[100px] text-[17px] flex flex-row align-center justify-center items-center decoration-none  hover:text-white `}>
                                <FiMail className={`mr-[10px] icon mail`} />
                                <small>Email</small>
                            </a>}
                    </ul>
                    {/* Ícone de tradução */}
                    <div
                        onClick={toggleTranslate} // Mostra/esconde o Google Translate ao clicar
                        style={{ cursor: "pointer",
                            fontSize: "20px",
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "10px" }}
                    >
                        <FaGlobe />
                    </div>

                    {/* Elemento escondido do Google Translate */}
                    <div
                        id="google_translate_element"
                        style={{
                            display: "none", // Escondido por padrão
                            position: "absolute",
                            top: "50px", // Ajuste a posição conforme necessário
                            right: "10px",
                            zIndex: 999,
                            backgroundColor: "#fff",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                            borderRadius: "5px",
                            padding: "5px",
                            fontSize: "1rem", // Tamanho menor
                            width: "auto",
                        }}
                    ></div>
                </div>
                <div className={`absolute top-[15px] right-[25px] md:hidden `}>
                    <img src={avatar.src} className={` w-[40px] rounded-[50%] border-[2px] border-solid border-green-100 bg-dark-100 `} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavBar

export function ResponsiveNavbar({ activePage, pageName = "" }) {

    const [active, setActive] = useState(activePage || "home")

    function handleActive(e) {
        let tgt = e.target.dataset;
        let parent = e.target.parentElement.dataset;

        if (Object.entries(tgt).length === 0) {
            if (Object.entries(parent).length > 0) {
                let { name } = parent
                setActive(name)
            }
            return
        }
        let { name } = tgt;
        setActive(name)
    }

    return (
        <div className={`mobileNav`}>
            <div className={`main`}>
                <li className={active === "home" ? `active` : `li`} data-name="home" onClick={handleActive}>
                    <Link href="/">
                        <ion-icon name="home-outline" class={`icon`}></ion-icon>
                    </Link>
                    <label className={`label`}>Início</label>
                </li>
                <li className={active === "projects" ? `active` : `li`} data-name="projects" onClick={handleActive}>
                    <Link href="/projects">
                        <ion-icon name="cube-outline" class={`icon`}></ion-icon>
                    </Link>
                    <label className={`label`}>
                        Projetos
                    </label>
                </li>
                <li className={active === "about" ? `active` : `li`} data-name="about" onClick={handleActive}>
                    <Link href="/about">
                        <ion-icon name="person-outline" class={`icon`}></ion-icon>
                    </Link>
                    <label className={`label`}>Quem sou eu ?</label>
                </li>
                <li className={active === "contact" ? `active mr-5` : `li mr-5`} data-name="contact" onClick={handleActive}>
                    <Link href={pageName === "" ? "#contact" : "/#contact"}>
                        <ion-icon name="mail-outline" class={`icon`}></ion-icon>
                    </Link>
                    <label className={`label`}>Contato</label>
                </li>
            </div>
        </div>
    )
}