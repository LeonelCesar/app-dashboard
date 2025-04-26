import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Packge from "./pages/Pakege";
import SettingsPges from "./pages/SettingsPage";
import Users from "./pages/Users";
import DashboardLayout from "./components/DashboarLayout";
import DashPageTasks from "./pages/DashPageTasks";


function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="/dashpage" element={<DashPageTasks />} />
        <Route path="/packge" element={<Packge />} />
        <Route path="/settings" element={<SettingsPges />} />
        <Route path="/users" element={<Users />} />
      </Route>
    </Routes>
  );
}

export default App;
