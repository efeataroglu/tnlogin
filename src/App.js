import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import GlobalStyles from "./components/styles/Global";
import { Container } from "./components/styles/Container.styled";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { Brand } from "./components/Brand/Brand";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container>
          <Brand />
          <LoginForm />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
