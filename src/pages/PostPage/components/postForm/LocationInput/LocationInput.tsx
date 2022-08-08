import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
import Input from "@/components/Input";
import { useGeocoder } from "@/pages/PostPage/hooks";
import Button from "@/components/Button";
import MapViewer from "./MapViewer";
import {
  Container,
  InputContainer,
  MapWrapper,
  PostSearchWrapper,
} from "./LocationInput.style";

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
        <Input readOnly fullWidth placeholder="주소" value={addressString} />
        <Button onClick={() => setOpen((prev) => !prev)}>주소 검색</Button>
      </InputContainer>
      {isOpen && (
        <PostSearchWrapper>
          <DaumPostcodeEmbed onComplete={onComplete} autoClose={false} />
        </PostSearchWrapper>
      )}
      {addressString && (
        <MapWrapper>
          <MapViewer lat={LatLng.lat} lng={LatLng.lng} level={3} />
        </MapWrapper>
      )}
      {/* TODO refactoring */}
      {false && (
        <Input
          {...register("departurePlace", {
            value: { lat: LatLng.lat, lng: LatLng.lng },
            required: true,
          })}
        />
      )}
    </Container>
  );
}

export default LocationInput;
