import Wrapper from "./wrapper"

const Counter = () => {
  return (
    <div className="bg-[#e4f1e8]/70 py-15">
    <Wrapper>
    <div className="flex-row md:flex justify-between items-center lg:w-[70%] lg:mx-auto px-8 lg:px-0">
      <div className="grid text-center gap-2 mb-8 md:mb-0">
        <span className="text-4xl lg:text-6xl font-bold">25,356</span>
        <span className="text-gray-500 font-semibold">Happy Customers</span>
      </div>
      <div className="grid text-center gap-2 mb-8 md:mb-0">
        <span className="text-4xl lg:text-6xl font-bold">6,050</span>
        <span className="text-gray-500 font-semibold">Followers</span>
      </div>
      <div className="grid text-center gap-2 mb-8 md:mb-0">
        <span className="text-4xl lg:text-6xl font-bold">851</span>
        <span className="text-gray-500 font-semibold">Shops</span>
      </div>
      <div className="grid text-center gap-2 mb-8 md:mb-0">
        <span className="text-4xl lg:text-6xl font-bold">96%</span>
        <span className="text-gray-500 font-semibold">Happy Customers</span>
      </div>
    </div>
    </Wrapper>
    </div>
  )
}

export default Counter
