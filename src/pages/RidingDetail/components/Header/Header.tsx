import { Grid } from "@mui/material";
import Avatar from "@/components/Avatar";
import { Container } from "./Header.style";

interface HeaderProps {
  leader: {
    id: string | number;
    nickname: string;
    profile_image: string;
  };
  thumbnail: string;
}

const Header = ({
  leader: { nickname, profile_image: profileImage },
  thumbnail,
}: HeaderProps) => {
  return (
    <Container>
      <img src={thumbnail} alt="thumbnail" />
      <Grid container>
        <Grid item xs={8}>
          <Avatar src={profileImage} alt="profile" />
          <span>{nickname}</span>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
