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
  defaultImages?: string[];
}

const ImageInput = ({
  error,
  errorMessage,
  imageLimit,
  value,
  onChange,
  defaultImages,
  inputRef,
}: ImageInputProps) => {
  const [imageList, setImageList] = useState<Image[]>(
    defaultImages
      ? defaultImages.map((image, index) => ({
          url: image,
          id: value[index],
          originalFileName: value[index],
        }))
      : []
  );
  const [customError, setCustomError] = useState<{
    error: boolean;
    errorMessage: string;
  }>({ error: true, errorMessage: "" });

  const handleChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
    if (!e.target.files) return;
    if (imageLimit && value.length >= imageLimit) {
      setCustomError({
        error: true,
        errorMessage: "최대 2개까지 추가할 수 있습니다.",
      });
      return;
    }
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
      <ImageViewer
        images={imageList}
        onDelete={(id) => {
          setCustomError({ error: false, errorMessage: "" });
          setImageList((prev) => prev.filter((image) => image.id !== id));
        }}
      />
      {error && (
        <Text textStyle={{ color: "#d32f2f" }} variant="caption">
          {errorMessage}
        </Text>
      )}
      {customError.error && (
        <Text textStyle={{ color: "#d32f2f" }} variant="caption">
          {customError.errorMessage}
        </Text>
      )}
      <input hidden value={value} ref={inputRef} readOnly />
    </div>
  );
};

export default ImageInput;
