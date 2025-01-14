import { testimonials } from "../constants"
export default function Testimonials() {
  return (
    <div className="mt-20 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are Saying
        </h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className="bg-neutral rounded-md text-md p-6 border border-neutral-800 font-thin">
                        <p>{testimonial.text}</p>

                        <div className="flex mt-8 items-start">
                            <img className="w-12 h-12 rounded-full mr-6 border border-neutral-300 " src={testimonial.image} alt={testimonial.user}/>
                            <div>
                            <h6>{testimonial.user}</h6>
                            <span className="ext-sm font-normal italic text-neutral-600">{testimonial.company}</span>
                        </div>
                        </div>
                       
                    </div>
                </div>
            ))}
        </div>
        </div>
  )
}
