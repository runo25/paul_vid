import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Accounts from "./components/Accounts";
import Pay from "./components/Pay";
import Cards from "./components/Cards";
import Power from "./components/Power";
import Receive from "./components/Receive";
import ReceiveUSD from "./components/ReceiveUSD";
import Scan from "./components/Scan";
import Transactions from "./components/Transactions";
import TransactionDetails from "./components/TransactionDetails";
import Notifications from "./components/Notifications";
import NotificationDetails from "./components/NotificationDetails";
import ProvideInformation from "./components/ProvideInformation";
import Profile from "./components/Profile";
import PersonalData from "./components/PersonalData";
import Security from "./components/Security";
import Limits from "./components/Limits";
import AdminPanel from "./components/AdminPanel";
import GlobalPushBanner from "./components/GlobalPushBanner";

function App() {
  return (
    <>
      <GlobalPushBanner />
      <Routes>
        {/* Primary Tab Navigation */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/power" element={<Power />} />

        {/* Receive Hub */}
        <Route path="/receive" element={<Receive />} />
        <Route path="/receive/usd" element={<ReceiveUSD />} />

        {/* QR Scanner & Tag */}
        <Route path="/scan" element={<Scan />} />

        {/* Activity & Details */}
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/transaction/:id" element={<TransactionDetails />} />

        {/* Notifications & Compliance */}
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/notification/:id" element={<NotificationDetails />} />
        <Route path="/provide-information" element={<ProvideInformation />} />

        {/* Profile & Settings */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/personal-data" element={<PersonalData />} />
        <Route path="/security" element={<Security />} />
        <Route path="/limits" element={<Limits />} />

        {/* Admin Dashboard & Simulator */}
        <Route path="/admin" element={<AdminPanel />} />

        {/* Catch-all redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
