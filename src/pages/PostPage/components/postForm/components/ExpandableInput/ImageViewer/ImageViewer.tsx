import { Image } from "@/api/image";
import DeletableImage from "../DeletableImage/DeletableImage";
import { Container } from "./ImageViewer.style";

interface ImageViewerProps {
  images?: Image[];
  onDelete?: (id: number) => void;
}
function ImageViewer({ images = [], onDelete }: ImageViewerProps) {
  const handleDelete = (id: number) => {
    if (onDelete) onDelete(id);
  };
  return (
    <Container>
      {images.map((item) => (
        <DeletableImage
          src={item.url}
          alt={item.originalFileName}
          id={item.id}
          onDelete={() => handleDelete(item.id)}
          key={item.id}
        />
      ))}
    </Container>
  );
}

export default ImageViewer;
