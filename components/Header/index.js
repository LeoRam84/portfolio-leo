import { useState, useEffect } from "react"
import { Container } from ".."
import userAvatar from "../../public/images/avatar/avatar.png"

import usersInfo from "../../data/usersInfo.json"
import languages from "../../data/languages.json"

export default function Header({ children }) {

    const [resumeActive, setResumeActive] = useState(false)
    const [reposcount, setReposCount] = useState(0)
    const [avatar, setAvatar] = useState("")

    const userName = usersInfo.github_username;

    const startDate = new Date("2023-01-01");
    const currentDate = new Date();

    const totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    <h1 className={`text-[35px] pt-[10px] pr-[10px] pb-0 pl-0`}>
        {years} anos e {months} meses
    </h1>
    function openResume() {

        setResumeActive(!resumeActive)
    }

    // fetch github repos count
    async function getReposCount() {
        let res;
        if (localStorage.getItem("repo_counts") === null) {

            res = await fetch(`https://api.github.com/users/${userName}`)
            let data = await res.json()

            if (data && data.public_repos !== undefined) {
                const { public_repos, avatar_url } = data;
                localStorage.setItem("repo_counts", JSON.stringify(public_repos))
                // store github user avatar
                localStorage.setItem("github_avatar", JSON.stringify(avatar_url))
                setReposCount(public_repos)
            }
        }

        // get data from cahched localstorage
        let data = JSON.parse(localStorage.getItem("repo_counts"))
        let useravatar = JSON.parse(localStorage.getItem("github_avatar"))

        setReposCount(data)
        setAvatar(useravatar)

        return data
    }

    useEffect(() => {

        (async () => {
            await getReposCount()

        })()

    }, [])




    return (
        <header className={`header w-full h-[100vh] relative bg-dark-200 md:h-auto`}>
            <Container>
                {children}

                {/* shows on desktop */}
                <div className={`w-full h-[70vmin] flex align-center items-center justify-center flex-row p-[20px] flex-wrap mt-[50px]`}>

                    <div className={`w-full h-full mb-[50px] relative md:w-[50%]`}>
                        <div className={``}>
                            <span data-aos="fade-up" className={`py-[2px] px-[8px] bg-green-600 text-green-100 rounded-[3px] text-[12px] text-capitalize  `}>
                                {usersInfo.user_skill}
                            </span>
                            <br />
                            <br />
                            <h1 data-aos="fade-right" className={` text-[9vmin] md:text-[5vmin]`}>
                                {usersInfo.tag_line}
                            </h1>
                            <br />
                            <span data-aos="fade-in" className={` text-[20px] md:text-[2vmin] `}>
                                {usersInfo.subTitle}
                            </span>
                            <br />
                        </div>
                        <div className={`relative top-[50px] flex align-start items-start justify-start w-full`}>
                            <div data-aos="zoom-in-left" className={`w-[50%] mr-[20px] flex flex-col items-start justify-start`}>
                                <h1 className={` w-[8rem] mt-[10px] text-white-300 text-[12px] underline underline-offset-4 `}>
                                    Anos de Experiência:
                                </h1>
                                <h1 className={` text-[35px] pt-[0.3rem] pr-[10px] pb-0 pl-0 `}>
                                    {years}
                                    <span className={` w-[50px] mt-[10px] text-white-300 text-[12px] p-[0.4rem] `}>
                                    Ano(s)
                                    </span> 
                                    {months} 
                                    <span className={` w-[50px] mt-[10px] text-white-300 text-[12px] p-[0.4rem] `}>
                                    Meses 
                                    </span> 
                                    {/* {(new Date().getFullYear() - parseInt(usersInfo.tech_year))+1} */}
                                </h1>
                            </div>
                            <div data-aos="zoom-in-right" className={`w-[50%] mr-[20px] flex flex-col items-start justify-start`}>
                                <h1 className={` w-[8rem] mt-[10px] text-white-300 text-[12px] underline underline-offset-4 `}>
                                    Projetos:
                                </h1>
                                <h1 className={` text-[35px] pt-[0.3rem] pr-[10px] pb-0 pl-0 `}>
                                    {reposcount}
                                </h1>
                            </div>
                        </div>
                        <div className="w-full h-auto mt-[60px]">
                            <br />
                            <button className="w-[150px] border-[2px] border-solid border-green-200 px-5 py-3 bg-dark-100 rounded-[30px] scale-[.90] hover:scale-[.95] transition-all  " onClick={openResume}>Ver CV</button>
                        </div>

                        {resumeActive && <ResumeViewer openResume={openResume} />}
                    </div>
                    <div data-aos="fade-left" className={`main w-full h-auto hidden md:block md:w-[50%] relative `}>
                        <div className={`img-cont w-[250px] h-[250px] p-[15vmin] flex flex-col items-center justify-center bg-cover bg-center  rounded-[50%] `}>
                            <style jsx>{`
                                .img-cont{
                                    background-image: url("${avatar}");
                                }
                            `}</style>
                            {/* <img data-aos="zoom-in-up" src={avatar === "" ? userAvatar.src : avatar} className={`avatar rounded-[50%] `} /> */}
                        </div>
                        <div data-aos="fade-up" className={`circleA`}>
                            <img src={languages.languages.length === 0 && languages.languages.length > 2 ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" : languages.languages[0]} className={`langImgA`} />
                        </div>
                        <div data-aos="fade-right" className={`circleB`}>
                            <img src={languages.languages.length === 0 && languages.languages.length > 2 ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" : languages.languages[1]} className={`langImgB`} />
                        </div>
                        <div data-aos="fade-left" className={`circleC`}>
                            <img src={languages.languages.length === 0 && languages.languages.length > 2 ? "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" : languages.languages[2]} className={`langImgC`} />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

function ResumeViewer({ openResume }) {

    function dowloadCv() {
        let link = document.createElement("a")
        link.href = "/CV/resume.pdf";
        link.download = "Currículo Leonardo C. Ramidan";
        link.click()
    }

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-dark-400 z-[1500] flex flex-row items-center justify-center">
            <div id="box" className="w-[100%] h-[99%] mx-auto bg-dark-100 overflow-hidden rounded-md md:w-[70%]">
                <div id="head" className="w-full h-auto p-3 bg-dark-200 flex items-start justify-start">
                    <h2>Meu Currículo / CV</h2>
                    <button className="px-3 py-1 flex flex-row items-center justify-center bg-green-300 ml-4 text-[12px] text-dark-300 font-bold rounded-[5px] scale-[.90] transition-all hover:scale-[.95]  " onClick={dowloadCv}>Baixar</button>
                    <button className="px-3 py-1 flex flex-row items-center justify-center bg-red-500 ml-4 text-[12px] text-dark-300 font-bold rounded-[5px] scale-[.90] transition-all hover:scale-[.95] " onClick={openResume}>Sair</button>
                </div>
                <iframe src={"/CV/resume.pdf"} frameborder="0" className="w-full h-full overflow-scroll bg-white-200 mt-0"></iframe>
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}


