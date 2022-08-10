import Card from "@/components/Card";
import CardContent from "./RgCardContent";

interface RgCardProps {
  title?: string | number;
  subtitle?: string | number;
  imgOptions?: {
    image: string;
    height: string;
  };
  tags?: {
    id: number;
    label: string;
  }[];
  chipSpacing?: number;
}

const RgCard = ({
  title,
  subtitle,
  imgOptions,
  tags,
  chipSpacing,
}: RgCardProps) => {
  const mediaProps = { ...imgOptions, component: "img", alt: "Riding Image" };
  return (
    <Card
      content={
        <CardContent
          title={title}
          subtitle={subtitle}
          tags={tags}
          chipSpacing={chipSpacing}
        />
      }
      useMedia
      mediaOptions={mediaProps}
    />
  );
};

export default RgCard;
