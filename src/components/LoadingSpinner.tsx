const LoadingSpinner = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[var(--surface)]">
      <div className="animate-spin rounded-full h-8 w-8 border-2 border-[var(--border)] border-t-[var(--accent)]"></div>
    </div>
  );
};

export default LoadingSpinner;
