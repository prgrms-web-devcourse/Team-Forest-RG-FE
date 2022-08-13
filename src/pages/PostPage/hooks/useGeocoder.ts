import { useEffect, useState } from "react";

function useGeocoder() {
  const [geocoder, setGeocoder] = useState<kakao.maps.services.Geocoder>();
  const [address, setAddress] = useState<string>("");
  const [addressResult, setAddressResult] = useState<string>("");
  const [coord, setCoord] = useState<{ lat: number; lng: number }>();
  const [coordResult, setCoordResult] =
    useState<{ lat: number; lng: number }>();

  useEffect(() => {
    kakao.maps.load(() => {
      const newGeocoder = new kakao.maps.services.Geocoder();
      setGeocoder(newGeocoder);
    });
  }, []);

  useEffect(() => {
    if (!address) return;
    if (!geocoder) return;
    geocoder.addressSearch(address, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setCoordResult({
          lat: Number(result[0].road_address.y),
          lng: Number(result[0].road_address.x),
        });
      }
    });
  }, [address, geocoder]);

  useEffect(() => {
    if (!coord) return;
    if (!geocoder) return;
    geocoder.coord2Address(coord?.lng, coord?.lat, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const { road_address: roadAddress, address: lawAddress } = result[0];
        setAddressResult(roadAddress?.address_name || lawAddress.address_name);
      }
    });
  }, [coord, geocoder]);
  return { coordResult, setAddress, addressResult, setCoord };
}

export default useGeocoder;
