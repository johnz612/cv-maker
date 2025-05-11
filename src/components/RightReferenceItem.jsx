function RightReferenceItem({ reference }) {
  return (
    <div className="flex flex-col">
      <div className="text-sm font-bold">{reference.name}</div>
      <div className="text-sm font-medium ">
        <span>{reference.company}</span>
        <span>{reference.position ? ` / ${reference.position}` : null}</span>
      </div>
      <div className="text-xs">
        {reference.phone ? `Phone: ${reference.phone}` : null}
      </div>
      <div className="text-xs ">
        {reference.email ? `Email: ${reference.email}` : null}
      </div>
    </div>
  );
}

export default RightReferenceItem;
