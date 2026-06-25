import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import PersonalData from "./components/PersonalData";
import Receive from "./components/Receive";
import ReceiveUSD from "./components/ReceiveUSD";
import Transactions from "./components/Transactions";
import TransactionDetails from "./components/TransactionDetails";
import Notifications from "./components/Notifications";
import NotificationDetails from "./components/NotificationDetails";
import ProvideInformation from "./components/ProvideInformation";
import WorldCupPack from "./components/WorldCupPack";
import WorldCupPackES from "./components/WorldCupPackES";
import Flight from "./components/flight";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/personal-data" element={<PersonalData />} />
      <Route path="/receive" element={<Receive />} />
      <Route path="/receive/usd" element={<ReceiveUSD />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/transaction/:id" element={<TransactionDetails />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/notification/:id" element={<NotificationDetails />} />
      <Route path="/provide-information" element={<ProvideInformation />} />
      <Route path="/pagar" element={<WorldCupPack />} />
      <Route path="/poder" element={<WorldCupPackES />} />
      <Route path="/scan" element={<Flight />} />
    </Routes>
  );
}

export default App;
