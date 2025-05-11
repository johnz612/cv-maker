function HeadingDetails({ heading }) {
  return (
    <div>
      <h2 className="pb-1 text-sm font-medium tracking-wider">
        {heading.toUpperCase()}
      </h2>
      <div className="" />
      <div className="w-full h-[1px]  bg-white"></div>
    </div>
  );
}

export default HeadingDetails;
