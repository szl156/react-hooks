import { Dispatch, SetStateAction, useState } from "react";

export type ArrayReturnType<T> = {
  array: T[];
  set: Dispatch<SetStateAction<T[]>>;
  push: (element: T) => void;
  filter: (callback: (value: T, index: number, array: T[]) => boolean) => void;
  update: (index: number, newElement: T) => void;
  remove: (index: number) => void;
  clear: () => void;
};

export default function useArray<T>(defaultValue: T[]): ArrayReturnType<T> {
  const [array, setArray] = useState<T[]>(defaultValue);

  /**
   * Pushes a new element to the array
   * @param element The element to push
   * @returns void
   */
  function push(element: T) {
    setArray((a) => [...a, element]);
  }

  /**
   * Filters the array
   * @param callback The callback function
   * @returns void
   */
  function filter(callback: (value: T, index: number, array: T[]) => boolean) {
    setArray((a) => a.filter(callback));
  }

  /**
   * Updates an element in the array
   * @param index The index of the element to update
   * @param newElement The new element
   * @returns void
   */
  function update(index: number, newElement: T) {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ]);
  }

  /**
   * Removes an element from the array
   * @param index The index of the element to remove
   * @returns void
   */
  function remove(index: number) {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  }

  /**
   * Clears the array
   * @returns void
   */
  function clear() {
    setArray([]);
  }
  return { array, set: setArray, push, filter, update, remove, clear };
}
