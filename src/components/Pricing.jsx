import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
export default function Pricing() {
  return (
    <div className="mt-20">
        <h2 className="my-8 text-3xl sm:text-5xl lg:text-6xl mt-6 text-center tracking-wider">Pricing</h2>
        <div className="flex flex-wrap">
            {pricingOptions.map((option, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2" >
                    <div className="p-10 border border-neutral-700 rounded-xl">
                        <p className="text-4xl mb-8">{option.title}
                        {option.title === "Pro" && <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">(Most Popular)</span>}</p>
                        <p>
                            <span className="text-4xl mt-6 mr-2">{option.price}</span>
                            <span className="text-neutral-400 tracking-tight">/Month</span>
                        </p>
                        <ul>
                            {option.features.map((feature, index) => (
                                <li key={index} className="mt-8 flex items-center"><span className="text-orange-600"><CheckCircle2/></span>
                                <span className="ml-2">{feature}</span></li>
                            ))} 
                        </ul>
                        <a href="#" className="inline-flex items-center justify-center text-center mt-20 w-full p-5 h-12 tracking-tight text-xl rounded-lg border border-orange-500 hover:bg-orange-900 transition duration-500">Subscribe</a>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}
