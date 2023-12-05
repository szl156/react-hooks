import React from "react";
import useArray from "../../hook/useArray";

type Props = {
  arr: Array<any>;
};

const UseArrayTest: React.FC<Props> = ({ arr }) => {
  const _arr = arr;
  const { array, set, push, filter, update, remove, clear } = useArray(arr);

  const operateBtnList = [
    { operate: "set", cb: () => set(_arr) },
    {
      operate: "push",
      cb: () =>
        push({
          id: array[array.length - 1].id + 1,
          name: `push${array[array.length - 1].id + 1}`,
        }),
    },
    { operate: "filter", cb: () => filter((item) => item.id === 1) },
    { operate: "update", cb: () => update(0, { id: 1, name: "update" }) },
    { operate: "remove", cb: () => remove(0) },
    { operate: "clear", cb: () => clear() },
  ];

  return (
    <>
      {operateBtnList.map((item, index) => (
        <button key={index} onClick={() => item.cb()}>
          {item.operate}
        </button>
      ))}
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
