import Link from "next/link";
import React from "react";

const StateView = ({ name, id }: StateViewProps) => {
  return (
    <div className="flex">
      {name}
      <Link href={`/state/${id}`}>View</Link>
    </div>
  );
};

export default StateView;
