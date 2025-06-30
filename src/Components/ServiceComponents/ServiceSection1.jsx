import { Check } from "lucide-react"
import img1 from '/AboutImage/img3.png'
import img2 from '/AboutImage/img4.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"  
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons"

export default function ServiceSection1() {
  return (
    <div className=" px-4 py-16">
      <div className="grid lg:grid-cols-2 space-y-20 lg:space-y-0  items-center justify-center">
        {/* Left side - Statistics Card */}
        <div className="bg-primary lg:w-[80%] flex flex-col items-center justify-center h-4/4 rounded-2xl  text-white">
          <div className="space-y-8">
            {/* Services Stat */}
            <div className="flex items-start ">
              <div className="">
                <img className="lg:w-30 w-24 lg:h-30 h-24" src={img1} alt="" />
              </div>
              <div className="mb-4">
                <div className="text-6xl font-bold">10+</div>
                <div className="text-lg font-bold">Services Provided</div>
              </div>
            </div>

            {/* Divider */}
            <div className=""></div>
            <hr className="border-gray-300" />

            {/* Team Members Stat */}
            <div className="flex items-start ">
              <div className="">
                <img className="lg:w-30 w-24 lg:h-30 h-24" src={img2} alt="" />
              </div>
              <div>
                <div className="text-6xl font-bold">32+</div>
                <div className="text-lg font-bold">Team Members</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="space-y-4">
          <div>
            <h2 className="font-manrope text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Start right, succeed swiftly. Your path begins!
            </h2>

            <div className=" space-y-6 text-primary text-md leading-relaxed font-medium">
              <p>
                At LeadsNite, we think it's important to start things off right. Our way of starting projects makes sure
                you get the best data solutions quickly. This helps you reach your business goals in a smooth and
                efficient way.
              </p>

              <p>
                We understand the importance of laying a solid foundation for success, which is why we prioritize
                thorough planning and clear communication from the outset.
              </p>
            </div>
          </div>

          {/* Checklist */}
          <div className="space-y-4">
            {[
              "Initial Consultation",
              "Needs Assessment",
              "Project Planning",
              "Resource Allocation",
              "Kickoff Meeting",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="">
                  <FontAwesomeIcon icon={faSquareCheck} className="text-primary font-light text-xl" />
                </div>
                <span className="text-gray-900 font-medium text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}