import { useState } from "react";
import { Container, Header, Content, Sidebar, Button } from "rsuite";
import { CustomProvider } from "rsuite";
import "./styles/global.less";
import BusinessDatePicker from "./components/BusinessDatePicker";
import SelectedRange from "./components/SelectedRange";
import SeletedRangeContext from "./contexts";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <CustomProvider theme={theme}>
      <SeletedRangeContext>
        <Container>
          <Header as={"h1"} >Business DatePicker</Header>
          <Container>
            <Sidebar>
          <Button onClick={toggleTheme}>{theme === 'dark'? 'Light Mode': 'Dark Mode'}</Button>
            </Sidebar>
            <Content>
              <BusinessDatePicker></BusinessDatePicker>
              <SelectedRange />
            </Content>
          </Container>
        </Container>
      </SeletedRangeContext>
    </CustomProvider>
  );
}

export default App;
