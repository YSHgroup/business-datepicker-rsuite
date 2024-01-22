import { useState } from "react";
import { Container, Header, Content, Sidebar, Footer, Button } from "rsuite";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { CustomProvider } from "rsuite";
import "./styles/global.less";
import BusinessDatePicker from "./components/BusinessDatePicker";
import SelectedRange from "./components/SelectedRange";
import SeletedRangeContext  from "./contexts";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <CustomProvider theme={theme}>
      <SeletedRangeContext>
        <Container>
        <Header>Business DatePicker</Header>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
        <Content>
          <BusinessDatePicker></BusinessDatePicker>
      <SelectedRange />

        </Content>
      </Container>
      </SeletedRangeContext>
      
    </CustomProvider>
  );
}

export default App;
