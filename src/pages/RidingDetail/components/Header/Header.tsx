import Avatar from "@/components/Avatar";
import Text from "@/components/Text";
import { Container, Content } from "./Header.style";

interface HeaderProps {
  leader: {
    id: string | number;
    nickname: string;
    profile_image: string;
  };
  thumbnail: string;
  title: string;
}

const Header = ({ leader, thumbnail = "", title = "" }: HeaderProps) => {
  const { nickname, profile_image: profileImage } = leader;
  return (
    <Container>
      <img src={thumbnail} alt="thumbnail" />
      <Content>
        <Text variant="h2" noWrap>
          {title}
        </Text>
        <div className="leader-info">
          <Avatar src={profileImage} alt={nickname} />
          <Text variant="subtitle1" noWrap>
            {nickname}
          </Text>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
