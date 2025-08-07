import Wrapper from "./wrapper";

const Counter = () => {
  return (
    <div className="bg-[#e4f1e8]/70 py-15">
      <Wrapper>
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-6 text-center lg:w-[70%] lg:mx-auto px-0">
          <div className="grid gap-2 mb-10 md:mb-0">
            <span className="text-4xl lg:text-6xl font-bold">25,356</span>
            <span className="text-gray-500 font-semibold">Happy Customers</span>
          </div>
          <div className="grid gap-2 mb-10 md:mb-0">
            <span className="text-4xl lg:text-6xl font-bold">6,050</span>
            <span className="text-gray-500 font-semibold">Followers</span>
          </div>
          <div className="grid gap-2">
            <span className="text-4xl lg:text-6xl font-bold">851</span>
            <span className="text-gray-500 font-semibold">Shops</span>
          </div>
          <div className="grid gap-2">
            <span className="text-4xl lg:text-6xl font-bold">96%</span>
            <span className="text-gray-500 font-semibold">Happy Customers</span>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Counter;