import Text from "@/components/Text";
import RegisterForm from "./components/RegisterForm";
import { Container } from "./RegisterPage.style";

function RegisterPage() {
  return (
    <Container>
      <Text variant="h5" fontWeight={600}>
        라이딩 정보 입력
      </Text>
      <RegisterForm />
    </Container>
  );
}

export default RegisterPage;
