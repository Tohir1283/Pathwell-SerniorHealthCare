import { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return [data, setData];
};

export default useData;
