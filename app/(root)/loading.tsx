const Loading = () => {
  return (
    <div className="flex-center min-h-screen w-full">
      <div className="flex-center gap-2 animate-pulse">
        <div className="h-5 w-5 rounded-full bg-primary" />
        <div className="h-5 w-5 rounded-full bg-primary" />
        <div className="h-5 w-5 rounded-full bg-primary" />
      </div>
    </div>
  );
};

export default Loading;
