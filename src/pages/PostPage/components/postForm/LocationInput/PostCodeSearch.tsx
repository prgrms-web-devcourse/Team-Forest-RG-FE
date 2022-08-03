import DaumPostcodeEmbed, {
  Address,
  DaumPostcodeEmbedProps,
} from "react-daum-postcode";

interface PostCodeProps extends DaumPostcodeEmbedProps {
  onComplete: (data: Address) => void;
}

function PostCodeSearch({ onComplete, ...props }: PostCodeProps) {
  return <DaumPostcodeEmbed onComplete={onComplete} {...props} />;
}

export default PostCodeSearch;
