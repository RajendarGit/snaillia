import { Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="text-center min-h-screen flex justify-center items-center">
      <div>
        <Search size={48} className="text-gray-300 mb-8 mx-auto" />
        <h2 className="text-4xl font-semibold text-gray-500 mb-4">
          Product Not Found
        </h2>
        <p className="text-gray-500">
          Please try searching for another product.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
