import {
  ChangeEventHandler,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import { Image, postImage } from "@/api/image";
import Button from "@/components/Button";
import Text from "@/components/Text";
import ImageViewer from "./ImageViewer/ImageViewer";

interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
  imageLimit?: number;
  value?: any;
  onChange?: (...event: any[]) => void;
  inputRef?: any;
}

const ImageInput = ({
  error,
  errorMessage,
  imageLimit,
  value,
  onChange,
  inputRef,
}: ImageInputProps) => {
  const [imageList, setImageList] = useState<Image[]>([]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
    if (!e.target.files) return;
    if (imageLimit && value.length >= imageLimit) return;
    const images = Array.from(e.target.files);
    const results = await Promise.all(
      images.map((image) => {
        const formData = new FormData();
        formData.append("image", image);
        return postImage(formData);
      })
    );
    setImageList((prev) => [...prev, ...results]);
  };

  useEffect(() => {
    if (onChange) onChange(imageList.map((item) => item.id));
  }, [imageList, onChange]);

  return (
    <div>
      <Button variant="contained" color="primary" component="label">
        사진 추가
        <input
          hidden
          accept=".jpg,.png"
          multiple
          type="file"
          onChange={handleChange}
        />
      </Button>
      <ImageViewer images={imageList} />
      {error && <Text variant="caption">{errorMessage}</Text>}
      <input hidden value={value} ref={inputRef} readOnly />
    </div>
  );
};

export default ImageInput;
