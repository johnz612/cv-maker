function CategoryHeading({ heading }) {
  return (
    <div className="mb-4">
      <h3 className="font-bold text-[#163853] tracking-wide">{heading}</h3>

      <div className="h-1" />

      <div className="h-[1px] w-full bg-[#163853]" />
    </div>
  );
}

export default CategoryHeading;
