const Shimmer = () => {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-10 sm:px-8 sm:py-5 overflow-auto">
        <div className="w-full max-w-4xl text-center mb-6 animate-pulse">
          <div className="h-10 bg-gray-300 rounded w-2/3 mx-auto mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3 mx-auto mb-1"></div>  
          <div className="h-4 bg-gray-300 rounded w-1/4 mx-auto mb-4"></div> 
          <div className="h-10 bg-gray-300 rounded w-40 mx-auto mb-6"></div> 
        </div>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 max-w-6xl mb-6 animate-pulse w-full">
          <div className="bg-gray-400 rounded-2xl shadow-2xl p-8 col-span-2 transform transition-all duration-300 h-32">
            <div className="h-6 bg-gray-300 rounded w-1/3 mb-1"></div> 
            <div className="h-4 bg-gray-300 rounded w-full mb-1"></div> 
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-1"></div> 
            <div className="h-4 bg-gray-300 rounded w-2/3"></div> 
          </div>
  
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-400 rounded-2xl shadow-2xl p-8 transform transition-all duration-300 h-32"
            >
              <div className="h-6 bg-gray-300 rounded w-1/3 mb-1"></div> 
              <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-1"></div> 
              <div className="h-4 bg-gray-300 rounded w-2/3"></div> 
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Shimmer;
  