import { useEffect, useRef, useState } from "react";

function useKakaoAPI() {
  const script = useRef<HTMLScriptElement>();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (script.current === undefined) {
      script.current = document.createElement("script");
      script.current.type = "text/javascript";
      script.current.src =
        "https://dapi.kakao.com/v2/maps/sdk.js?appkey=f4e97f05c17ad778738a2e924837bbac&libraries=services&autoload=false";
      document.head.appendChild(script.current);
    }
    script.current.onload = () => {
      setLoading(false);
    };
  }, []);
  return isLoading;
}

export default useKakaoAPI;
