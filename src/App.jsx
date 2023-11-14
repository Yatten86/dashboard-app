import { createTheme } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard/Dashboard";
import Leftbar from "./scenes/global/Leftbar";
// import Bar from "./scenes/bar";
// import Calendar from "/scenes/calendar";
// import Contacts from "./scenes/contacts";
// import FAQ from "./scenes/faq";
// import Form from "./scenes/form";
// import Geography from "./scenes/georgaphy";
// import Invoices from "./scenes/invoices";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
import Team from "./scenes/team/Team";

const theme = createTheme({
  direction: 'ltr',
  responsiveFontSize: true,
  theme: "DARK"
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <main className="content">
          <Topbar />
          <Leftbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            {/* <Route path="/contacts" element={<Contacts />} /> */}
            {/* <Route path="/invoices" element={<Invoices />} /> */}
            {/* <Route path="/form" element={<Form />} /> */}
            {/* <Route path="/bar" element={<Bar />} /> */}
            {/* <Route path="/pie" element={<Pie />} /> */}
            {/* <Route path="/line" element={<Line />} /> */}
            {/* <Route path="/faq" element={<FAQ />} /> */}
            {/* <Route path="/geography" element={<Geography />} /> */}
            {/* <Route path="/calendar" element={<Calendar />} /> */}
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
