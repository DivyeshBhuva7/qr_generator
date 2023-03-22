import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import GeneratePage from "./GeneratePage";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          Input: {
            styles: (theme) => ({
              input: {
                borderColor: theme.colors.teal[5],
              },
            }),
          },
        },
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/generate-qr" element={<GeneratePage />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
