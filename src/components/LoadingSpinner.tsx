const LoadingSpinner = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
    </div>
  );
};

export default LoadingSpinner;