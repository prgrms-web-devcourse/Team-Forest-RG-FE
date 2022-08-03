import { useEffect, useRef, useState } from "react";
import useKakaoAPI from "../../../hooks/useKakaoAPI";

interface MapProps {
  lat: number;
  lng: number;
  level?: number;
}

function MapViewer({ lat, lng, level = 13 }: MapProps) {
  const container = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<kakao.maps.Map>();
  const isApiLoading = useKakaoAPI();
  useEffect(() => {
    if (isApiLoading || map) return;
    kakao.maps.load(() => {
      const center = new kakao.maps.LatLng(lat, lng);
      const options = {
        center,
        level,
      };
      if (container.current === null) return;
      const newMap = new kakao.maps.Map(container.current, options);
      setMap(newMap);
    });
  }, [isApiLoading]);

  useEffect(() => {
    if (!map) return;
    const centerPosition = new kakao.maps.LatLng(lat, lng);
    const marker = new kakao.maps.Marker({
      position: centerPosition,
    });
    marker.setMap(map);
    map.panTo(centerPosition);
  }, [lat, lng, map]);

  return (
    <div
      style={{ width: "100%", height: "100%", borderRadius: "0.5rem" }}
      ref={container}
    />
  );
}

export default MapViewer;
