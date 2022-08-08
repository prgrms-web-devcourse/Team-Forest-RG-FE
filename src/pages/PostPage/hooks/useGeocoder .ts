import { useEffect, useState } from "react";

function useGeocoder() {
  const [geocoder, setGeocoder] = useState<kakao.maps.services.Geocoder>();
  const [address, setAddress] = useState("");
  const [LatLng, setLatLng] = useState({ lat: -1, lng: -1 });
  useEffect(() => {
    kakao.maps.load(() => {
      const newGeocoder = new kakao.maps.services.Geocoder();
      setGeocoder(newGeocoder);
    });
  }, []);

  useEffect(() => {
    if (address === "") return;
    if (geocoder === undefined) return;
    geocoder.addressSearch(address, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setLatLng({
          lat: Number(result[0].road_address.y),
          lng: Number(result[0].road_address.x),
        });
      }
    });
  }, [address, geocoder]);
  return { LatLng, setAddress };
}

export default useGeocoder;
