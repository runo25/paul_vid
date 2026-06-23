import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import PersonalData from "./components/PersonalData";
import Receive from "./components/Receive";
import ReceiveUSD from "./components/ReceiveUSD";
import Transactions from "./components/Transactions";
import TransactionDetails from "./components/TransactionDetails";

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
    </Routes>
  );
}

export default App;
