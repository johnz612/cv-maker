function HeadingDetails({ heading }) {
  return (
    <div>
      <h2 className="text-sm font-medium tracking-wider">
        {heading.toUpperCase()}
      </h2>
      <div className="w-full h-[1px] mt-0.5 bg-white"></div>
    </div>
  );
}

export default HeadingDetails;
