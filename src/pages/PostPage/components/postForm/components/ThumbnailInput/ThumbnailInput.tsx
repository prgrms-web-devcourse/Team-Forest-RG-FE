import { ChangeEventHandler, forwardRef, useState } from "react";
import { postImage } from "@/api/image";
import Button from "@/components/Button";
import Text from "@/components/Text";
import {
  ThumbnailContainer,
  ThumbnailImage,
  Container,
} from "./ThumbnailInput.style";

interface ThumbnailInptProps {
  onChange?: (...event: any[]) => void;
  defaultUrl: string;
}
const ThumbnailInput = forwardRef<HTMLInputElement, ThumbnailInptProps>(
  ({ onChange, defaultUrl }, ref) => {
    const [imageUrl, setImageUrl] = useState<string>(defaultUrl);

    const handleChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
      if (!e.target.files) return;
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      const image = await postImage(formData);
      setImageUrl(image.url);
      if (onChange) onChange(image.id);
    };
    return (
      <Container>
        <Text variant="h6">대표 이미지</Text>
        <ThumbnailContainer>
          <ThumbnailImage src={imageUrl} alt="thumbnail" />
          <Button customColor="#999" component="label">
            등록하기
            <input
              hidden
              accept=".jpg,.png"
              type="file"
              ref={ref}
              onChange={handleChange}
            />
          </Button>
        </ThumbnailContainer>
      </Container>
    );
  }
);

export default ThumbnailInput;
