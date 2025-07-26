const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-600 w-50 h-50 rounded-lg animate-pulse mb-4" />
      <div className="grid gap-2">
        <div className="bg-gray-400 w-100 h-5 animate-pulse" />
        <div className="bg-gray-400 w-100 h-20 animate-pulse" />
      </div>
      <div className="flex mt-4 gap-2">
        <div className="bg-gray-400 w-49 h-15 animate-pulse" />
        <div className="bg-gray-400 w-49 h-15 animate-pulse" />
      </div>
    </div>
  );
};

export default Loading;
