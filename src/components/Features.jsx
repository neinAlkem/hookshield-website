import { features } from "../constant"

const Features = () => {
  return (
    <div className="relative mt-20 border-neutral-800 min-h-8">
        <div className="text-center">
            <span className=" text-md bg-neutral-900 text-blue-500 rounded-full h-6 lg:text-lg font-bold py-1 px-4 uppercase">
                HookShield feature
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-5xl mt-5 lg:mt-10">
                We Make Sure <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">You're Safe!</span>
            </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
            {features.map((feature,index) => (
                <div key={index} className="w-full sm:w-1/2">
                    <div className="flex">
                        <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-blue-500 justify-center items-center rounded-full">
                            {feature.icon}
                        </div>
                        <div>
                            <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                            <p className="text-neutral-500 text-md mb-20">{feature.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features
