import { ChangeEventHandler, forwardRef, useEffect, useState } from "react";
import { Avatar, Badge } from "@mui/material";
import IconButton from "@/components/IconButton";
import * as S from "./ProfileImageInput.style";
import { postImage } from "@/api/image";

interface ProfileImageInputProps {
  defaultUrl?: string;
  onChange?: (...event: any) => void;
  value?: any;
}

const ProfileImageInput = forwardRef<HTMLInputElement, ProfileImageInputProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ defaultUrl, onChange, value, ...props }, ref) => {
    const [imageUrl, setImageUrl] = useState<string>("");

    useEffect(() => {
      if (defaultUrl) setImageUrl(defaultUrl);
    }, [defaultUrl]);

    const handleChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
      if (!e.target.files) return;
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      const image = await postImage(formData);
      setImageUrl(image.url);
      if (onChange) onChange(image.id);
    };
    return (
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <S.EditButton>
            <IconButton
              iconName="edit_rounded"
              component="label"
              color="primary"
            >
              <input
                hidden
                accept=".jpg,.png"
                ref={ref}
                type="file"
                onChange={handleChange}
                {...props}
              />
            </IconButton>
          </S.EditButton>
        }
      >
        <Avatar src={imageUrl} sx={{ width: "10rem", height: "10rem" }} />
      </Badge>
    );
  }
);

export default ProfileImageInput;
