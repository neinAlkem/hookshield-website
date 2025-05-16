import { faq } from "../constant"

const Faq = () => {
  return (
    <div id="faq" className="mt-10" tracking-wide>
        <h2 className="text-3xl sm:text-5xl lg:text-5xl text-center my-10 lg:my-20">Frequently Asked Question</h2>
        <div className="flex flex-wrap justify-center">
            {faq.map((faq, index) => (
                <div key={index} className="w-full py-3 px-5 items-center">
                    <div className="bg-neutral-900 rounded-md p-6 text-md border border-blue-500">
                        <div>
                            <h3 className="text-lg font-bold">{faq.question}</h3>
                            <p className="text-md mt-4 lg:mt-5 text-neutral-200">{faq.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Faq
