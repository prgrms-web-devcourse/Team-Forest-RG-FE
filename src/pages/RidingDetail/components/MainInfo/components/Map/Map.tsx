import { useRef, useEffect } from "react";
import { MapContainer } from "./Map.style";

interface Props {
  lat: number;
  lng: number;
}

const { kakao } = window;

const Map = ({ lat, lng }: Props) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    kakao.maps.load(() => {
      if (mapRef.current) {
        const map = new kakao.maps.Map(mapRef.current, {
          center: new kakao.maps.LatLng(lat, lng),
          level: 3,
        });
        const marker = new kakao.maps.Marker({
          position: map.getCenter(),
        });
        marker.setMap(map);
      }
    });
  }, [lat, lng]);

  return <MapContainer ref={mapRef} />;
};

export default Map;
