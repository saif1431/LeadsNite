export default function Template1() {
  return (
    <div className=" lg:py-12  mt-20">
      <div className="">


        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Challenges */}
            <div className="flex  lg:w-20 flex-col lg:flex-row lg:items-center justify-center">  

              {/* Challenges Label */}
              <div className="transform w-fit flex items-center justify-center  lg:-rotate-90 ">
                <h2 className="text-4xl font-bold text-gray-800 whitespace-nowrap">CHALLENGES</h2>
              </div>
            </div>
          <div className="flex-1">
          

            {/* Challenge Items */}
            <div className="space-y-6 max-w-6xl">
              <div className="bg-white px-4 py-6 rounded-lg shadow-sm border-l-4 border-gray-400">
                <p className="text-sm text-gray-600">
                  This slide is 100% editable. Adapt it to your needs and capture your audience's attention.
                </p>
              </div>

              <div className="bg-primary text-white px-4 py-6 rounded-lg">
                <p className="text-sm">
                  This slide is 100% editable. Adapt it to your needs and capture your audience's attention.
                </p>
              </div>

              <div className="bg-white px-4 py-6 rounded-lg shadow-sm border-l-4 border-gray-400">
                <p className="text-sm text-gray-600">
                  This slide is 100% editable. Adapt it to your needs and capture your audience's attention.
                </p>
              </div>

              <div className="bg-primary text-white px-4 py-6 rounded-lg">
                <p className="text-sm">
                  This slide is 100% editable. Adapt it to your needs and capture your audience's attention.
                </p>
              </div>
            </div>
          </div>

          {/* Center Divider */}
          <div className="lg:w-3 hidden lg:block bg-gray-300"></div>
   <div className=" block 0 lg:hidden  items-center lg:justify-center justify-center ">
              {/* Solutions Label */}
              <div className="transform lg:rotate-90 w-20">
                <h2 className="text-4xl text-center font-bold text-gray-800 whitespace-nowrap">SOLUTIONS</h2>
              </div>
            </div>
          {/* Right Side - Solutions */}
          <div className="flex-1">

            {/* Solution Items */}
            <div className="space-y-6">
              <div className="bg-primary text-white px-4 py-6 rounded-lg">
                <p className="text-sm">
                  This slide is 100% editable. Adapt it to your needs and capture your audience's attention.
                </p>
              </div>

              <div className="bg-white px-4 py-6 rounded-lg shadow-sm border-l-4 border-gray-400">
                <p className="text-sm text-gray-600">
                  This slide is 100% editable. Adapt it to your needs and capture your audience's attention.
                </p>
              </div>

              <div className="bg-primary text-white px-4 py-6 rounded-lg">
                <p className="text-sm">
                  This slide is 100% editable. Adapt it to your needs and capture your audience's attention.
                </p>
              </div>

              <div className="bg-white px-4 py-6 rounded-lg shadow-sm border-l-4 border-gray-400">
                <p className="text-sm text-gray-600">
                  This slide is 100% editable. Adapt it to your needs and capture your audience's attention.
                </p>
              </div>

              
            </div>

          </div>
          <div className="lg:flex  w-20 hidden items-center  justify-center ">
              {/* Solutions Label */}
              <div className="transform lg:rotate-90 ">
                <h2 className="text-4xl font-bold text-gray-800 whitespace-nowrap">SOLUTIONS</h2>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
