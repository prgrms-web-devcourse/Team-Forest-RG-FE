import { Stack } from "@mui/material";
import dayjs from "dayjs";
import Card from "@/components/Card";
import Text from "@/components/Text";
import Chip from "@/components/Chip";
import { Riding } from "@/pages/MyPage/mypageService";

interface RidingCardProps {
  data: Riding;
}
const RidingCard = ({ data }: RidingCardProps) => {
  const { riding } = data;

  const RgContent = (
    <>
      <Text variant="subtitle2" textStyle={{ color: "#878D91" }}>
        {`${dayjs(riding.ridingDate).get("M") + 1}월
        ${dayjs(riding.ridingDate).get("D")}일 / `}
        {riding.zone.name}
      </Text>
      <Text variant="h6" textStyle={{ fontWeight: 800 }}>
        {riding.title}
      </Text>
      <Stack direction="row" spacing={1} mb={1}>
        {riding.bicycleType.map((bicycle) => (
          <Chip
            key={bicycle}
            label={bicycle}
            bgColor="#FFF4F7"
            textColor="#E21D47"
            size="small"
          />
        ))}
      </Stack>
      <Text variant="body2" textStyle={{ color: "black", fontWeight: 900 }}>
        {riding.fee}원
      </Text>
    </>
  );
  const MediaOptions = {
    image: `${riding.thumbnail}`,
    alt: `${riding.title}`,
    component: "img",
    height: "140px",
  };

  return <Card content={RgContent} useMedia mediaOptions={MediaOptions} />;
};

export default RidingCard;
