import { Linkedin, Instagram, Github } from "lucide-react";
import { teamItems } from "../constant";

const Team = () => {
  return (
    <div className="mt-10" tracking-wide>
        <h2 className="text-3xl sm:text-5xl lg:text-5xl text-center my-10 lg:my-20">People Behind HookShield
        </h2>
        <div className="flex flex-wrap justify-center">
            {teamItems.map((teamItems, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 py-3 px-5 items-center">
                    <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-600 hover:shadow-blue-500/30 hover:shadow-2xl hover:border-blue-500">
                        <div className="flex items-start">
                        <img className="w-20 h-15 mr-6 rounded-md" src={teamItems.image} alt={teamItems.name}/>
                        <div>
                            <h3 className="text-lg lg:text-xl font-semibold">{teamItems.name}</h3>
                            <h4 className="text-md lg:text-lg font-normal text-neutral-400 mt-1">{teamItems.position}</h4>
                            <div className="flex items-start">
                                <a href={teamItems.linkedin}><Linkedin className="mt-4 w-5 h-5 mr-2"></Linkedin></a>
                                <a href={teamItems.instagram}><Instagram className="mt-4 w-5 h-5 mr-2"></Instagram></a>
                                <a href={teamItems.github}><Github className="mt-4 w-5 h-5 mr-2"></Github></a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Team
