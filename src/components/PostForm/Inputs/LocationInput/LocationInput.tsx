import { forwardRef, useEffect, useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
import Input from "@/components/Input";
import Button from "@/components/Button";
import MapViewer from "./MapViewer";
import {
  Container,
  InputContainer,
  MapWrapper,
  PostSearchWrapper,
} from "./LocationInput.style";
import useGeocoder from "./useGeocoder";

interface LocationInputProps {
  onChange?: (...event: any) => void;
  value?: {
    lat: number;
    lng: number;
  };
  error?: boolean;
}

const LocationInput = forwardRef<HTMLInputElement, LocationInputProps>(
  ({ value, onChange, error }, ref) => {
    const { setAddress, coordResult, setCoord, addressResult } = useGeocoder();
    const [addressString, setAddressString] = useState<string>("");
    const [isOpen, setOpen] = useState<boolean>(false);

    const onComplete = (data: Address) => {
      setAddressString(data.address);
      setAddress(data.address);
      setOpen(false);
    };

    useEffect(() => {
      if (value) setCoord(value);
    }, []);

    useEffect(() => {
      if (!coordResult) return;
      if (onChange) onChange(coordResult);
    }, [coordResult, onChange]);

    useEffect(() => {
      setAddressString(addressResult);
    }, [addressResult]);

    return (
      <Container>
        <InputContainer>
          <Input
            readOnly
            fullWidth
            placeholder="주소"
            value={addressString}
            ref={ref}
            error={error}
          />
          <Button onClick={() => setOpen((prev) => !prev)}>주소 검색</Button>
        </InputContainer>
        {isOpen && (
          <PostSearchWrapper>
            <DaumPostcodeEmbed onComplete={onComplete} autoClose={false} />
          </PostSearchWrapper>
        )}
        {addressString && value && (
          <MapWrapper>
            <MapViewer {...value} level={3} />
          </MapWrapper>
        )}
      </Container>
    );
  }
);

export default LocationInput;
