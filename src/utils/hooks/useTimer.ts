import { useEffect, useState } from "react";

const useTimer = (seconds: number) => {
  const [result, setResult] = useState<number>(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setResult(result + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [result]);

  return result;
};

export default useTimer;
