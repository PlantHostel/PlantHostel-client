import { useEffect, useState } from "react";

export const usePasswordCheck = () => {
  const [userpw, setUserpw] = useState("");
  const [userpwCheck, setUserpwCheck] = useState("");
  const [isEqual, setIsEqual] = useState(true);

  function changeUserpw(e: React.ChangeEvent) {
    const { value } = e.target as HTMLInputElement;

    setUserpw(value);
  }

  function changeUserpwCheck(e: React.ChangeEvent) {
    const { value } = e.target as HTMLInputElement;

    setUserpwCheck(value);
  }

  useEffect(() => {
    if (userpw !== userpwCheck) {
      setIsEqual(false);
    } else {
      setIsEqual(true);
    }
  }, [userpw, userpwCheck]);

  return { userpw, userpwCheck, isEqual, changeUserpw, changeUserpwCheck };
};
