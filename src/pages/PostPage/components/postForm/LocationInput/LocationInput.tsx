import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
import Input from "@/components/Input";
import useGeocoder from "@/pages/PostPage/hooks/useGeocoder";
import Button from "@/components/Button";
import MapViewer from "./MapViewer";
import {
  Container,
  InputContainer,
  MapWrapper,
  PostSearchWrapper,
} from "./LocationInput.style";
import { RidingFormValues } from "../PostForm";

function LocationInput() {
  const { register, setValue } = useFormContext<RidingFormValues>();
  const { setAddress, LatLng } = useGeocoder();
  const [addressString, setAddressString] = useState<string>("");
  const [isOpen, setOpen] = useState<boolean>(false);

  const onComplete = (data: Address) => {
    setAddressString(data.address);
    setAddress(data.address);
    setOpen(false);
  };

  useEffect(() => {
    setValue("information.departurePlace", {
      lat: LatLng.lat,
      lng: LatLng.lng,
    });
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
      {false && (
        <Input
          {...register("information.departurePlace", {
            required: "필수 입력항목입니다.",
          })}
        />
      )}
    </Container>
  );
}

export default LocationInput;
