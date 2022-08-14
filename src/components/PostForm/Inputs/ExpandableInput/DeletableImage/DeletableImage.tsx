import IconButton from "@/components/IconButton";
import { ButtonWrapper, Container, Img } from "./DeletableImage.style";

interface DeletableImageProps {
  src: string;
  alt: string;
  id?: string | number;
  onDelete?: (id?: string | number) => void;
}
function DeletableImage({ src, alt, id, onDelete }: DeletableImageProps) {
  return (
    <Container>
      <Img src={src} alt={alt} />
      <ButtonWrapper />
      <IconButton
        iconName="cancel_outlined_icon"
        color="error"
        onClick={() => onDelete && onDelete(id)}
      />
    </Container>
  );
}

export default DeletableImage;
