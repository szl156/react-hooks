import React from "react";
import useArray from "../../hook/useArray";

type Props = {
  arr: Array<any>;
};

const UseArrayTest: React.FC<Props> = ({ arr }) => {
  const { array, set, push, filter, update, remove, clear } = useArray(arr);

  return (
    <>
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item.id} - {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};
export default UseArrayTest;
