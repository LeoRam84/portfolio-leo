

import Link from "next/link"

import skills from "../../data/skills.json"
import usersInfo from "../../data/usersInfo.json"

/*flex-wrap-reverse, depois de flex-row, na segunda linha abaixo*/

export default function Intro() {

    return (
        <div className={`w-full h-auto p-0 relative top-[2rem] mb-[2rem]`}>
            <div className={`w-full flex flex-col sm:flex-row items-start justify-between `}> 
                <div className={`w-full h-auto relative top-[20px] p-[10px] mb-[30px] md:mb-0 md:w-[45%]`}>
                    <p className={`text-[12px] text-white-200 underline underline-offset-4`}>Introdução:</p>
                    <div className={`relative top-[20px]`}>
                        <h1 data-aos="zoom-in-up" className={`text-[35px] font-bold mb-[20px]`}>
                            {usersInfo.greeting_type}  Eu sou {usersInfo.full_name}.
                        </h1>
                        <br />
                        <br />
                        <p data-aos="zoom-in-right" className={`text-[15px] text-white-200 italic px-3 py-2 bg-dark-300 border-l-[3px] border-solid border-l-green-200 `}>
                            {usersInfo.intro_tagline}
                        </p>
                        <br />
                        <p data-aos="fade-up" className={`text-[14px] mb-5 text-white-200`}>
                            {usersInfo.bio_desc[0]}
                        </p>

                        <Link href="/about">
                            <a data-aos="zoom-in-up" className={`text-[14px] font-bold text-green-200 underline`}>Leia Mais</a>
                        </Link>
                    </div>
                </div>
                
                <div className={`w-full h-auto top-[20px] p-[10px] relative container md:w-[50%]`}>
                    {/* boxes */}
                    <p className={`text-[12px] mb-[2rem] text-white-200 underline underline-offset-4`}>Certificados:</p>
                    <IntroCards data={skills.skill} />
                </div>
            </div>

            {/* <div className={styles.companies}>
                <img src="https://avatars.githubusercontent.com/u/104397777?s=200&v=4" className={styles.compImage} alt="" />
                <img src="" className={styles.compImage} alt="" />
            </div>
            <br /> */}
        </div>
    )
}

function IntroCards({ data }) {

    return (
        <>
            {
                data.length > 0 ?
                    data.map((skill, i) => {
                        return (
                            <div data-aos="zoom-in-up" key={i} className={`w-full h-[300px] p-[20px] rounded-[5px] bg-dark-200 m-[0px] md:min-w-[20rem] lg:min-w-[27rem] relative transition-all mt-4 hover:shadow-2xl flex items-center justify-center`}>
                                <div className={`flex flex-col items-start justify-start`}>
                                    <p className={`m-0 font-extrabold text-green-100 hidden lg:block`}>
                                        {skill.name}
                                    </p>
                                    {/* <span className={`text-[12px] text-white-300 pt-[10px]  `}>
                                        {skill.description}
                                    </span> */}
                                </div>
                                {/* <div className={`absolute bottom-[10px]`}>
                                    <a className={` text-[14px] text-white-200 font-bold underline `}>
                                        {skill.projects_completed} 
                                    </a>
                                </div> */}
                                <div>
                                    <img src={skill.imageUrl} className={`object-cover object-center w-full h-auto max-w-[25rem] p-5 min-w-[20rem] 2xl:ml-10`} alt="Certificado" />
                                </div>
                                <ion-icon name="color-wand" class={`absolute top-[10px] right-[10px] text-green-400 p-[5px] `}></ion-icon>
                            </div>
                        )
                    })
                    :
                    <div data-aos="zoom-in-up" className={`w-full h-[120px] p-[20px] rounded-[5px] bg-dark-200 m-[0px] relative transition-all mt-4 hover:shadow-2xl `}>
                        <div className={`flex flex-col items-start justify-start`}>
                            <p className={`m-0 font-extrabold text-green-100 `}>
                                Desenvolvedor Front-End
                            </p>
                            <span className={`text-[12px] text-white-300 pt-[10px]  `}>
                                Desenvolvimento de interfaces bonitas e únicas.
                            </span>
                        </div>
                        <div className={`absolute bottom-[10px]`}>
                            <a className={` text-[14px] text-white-200 font-bold underline `}>
                                60 Projetos
                            </a>
                        </div>
                        <ion-icon name="color-wand" class={`absolute top-[10px] right-[10px] text-green-400 p-[5px] `}></ion-icon>
                    </div>
            }
        </>
    )
}