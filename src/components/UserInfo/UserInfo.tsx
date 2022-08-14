import { UserInfo as UserInfoType } from "response";
import IconButton from "../IconButton";
import Text from "../Text";
import Chip from "../Chip";
import * as S from "./UserInfo.style";

interface UserInfoProps {
  userInfo: UserInfoType;
}
const UserInfo = ({ userInfo }: UserInfoProps) => {
  return (
    <S.UserInfo>
      <S.UserIamgeBox>
        <S.UserIamge src={userInfo.ridingProfile.profileImage} />
        <S.EditButton>
          <IconButton iconName="add_circle" component="label" color="primary">
            <input hidden accept="image/*" multiple type="file" />
          </IconButton>
        </S.EditButton>
      </S.UserIamgeBox>
      <S.UserNickName>
        <Text variant="h6">{userInfo.ridingProfile.nickname}</Text>
      </S.UserNickName>
      <S.UserChipBox>
        {userInfo.ridingProfile.bicycles.map((bike: string) => (
          <Chip
            key={bike}
            label={bike}
            color="primary"
            sx={{ marginX: "3px", marginY: "1px" }}
          />
        ))}
        <Chip
          label={`${
            new Date().getFullYear() - userInfo.ridingProfile.ridingStartYear
          }년차`}
          bgColor="royalblue"
          textColor="white"
          sx={{ marginX: "3px", marginY: "1px" }}
        />
      </S.UserChipBox>
      <S.UserScoreBox>
        <S.GrayBox>
          <Text variant="body2">level</Text>
          <Text variant="body1" textStyle={{ fontWeight: 800 }}>
            {userInfo.ridingProfile.level}🦽
          </Text>
        </S.GrayBox>
        <S.GrayBox>
          <Text variant="body2">매너</Text>
          <Text variant="body1" textStyle={{ fontWeight: 800 }}>
            {userInfo.manner.mannerPoint} 😀
          </Text>
        </S.GrayBox>
      </S.UserScoreBox>
    </S.UserInfo>
  );
};

export default UserInfo;
