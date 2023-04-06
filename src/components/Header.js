import {StyledHeader, StyledButton} from "../style"
import { useNavigate } from "react-router-dom";
import {goToHome, goToProfile, goToLogin} from '../routes/Coordinator'

function Header() {
  const navigate = useNavigate()

  return (
    <StyledHeader>
      <StyledButton onClick={() => goToHome(navigate)}>
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={() => goToProfile(navigate, 'gabriel')}>
        Ir para página de perfil
      </StyledButton>
      <StyledButton onClick={() => goToLogin(navigate)}>
        Ir para página de Login
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
