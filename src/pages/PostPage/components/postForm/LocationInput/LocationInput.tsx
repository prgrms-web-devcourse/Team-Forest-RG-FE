import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import { Address } from "react-daum-postcode";
import Input from "@/components/Input";
import PostCodeSearch from "./PostCodeSearch";
import { useGeocoder } from "@/pages/PostPage/hooks";
import Button from "@/components/Button";
import MapViewer from "./MapViewer";
import { Container, InputContainer, MapWrapper } from "./LocationInput.style";

interface LocationInputValue {
  departurePlace: { lat: number; lng: number };
}

function LocationInput() {
  const { register, setValue } = useFormContext<LocationInputValue>();
  const { setAddress, LatLng } = useGeocoder();
  const [addressString, setAddressString] = useState<string>("");
  const [isOpen, setOpen] = useState<boolean>(false);

  const onComplete = (data: Address) => {
    setAddressString(data.address);
    setAddress(data.address);
    setOpen(false);
  };

  useEffect(() => {
    setValue("departurePlace", { lat: LatLng.lat, lng: LatLng.lng });
  }, [LatLng, setValue]);

  return (
    <Container>
      <InputContainer>
        <Input readOnly fullWidth value={addressString} />
        <Button onClick={() => setOpen((prev) => !prev)}>주소 검색</Button>
      </InputContainer>
      {isOpen && <PostCodeSearch onComplete={onComplete} autoClose={false} />}
      {addressString && (
        <MapWrapper>
          <MapViewer lat={LatLng.lat} lng={LatLng.lng} level={3} />
        </MapWrapper>
      )}
      {false && (
        <Input
          {...register("departurePlace", {
            value: { lat: LatLng.lat, lng: LatLng.lng },
          })}
        />
      )}
    </Container>
  );
}

export default LocationInput;
