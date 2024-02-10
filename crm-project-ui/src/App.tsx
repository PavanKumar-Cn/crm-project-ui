import React from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MainLayout from "./components/layouts/MainLayout";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/authentication/LoginPage";
import AdAdminDashBoard from "./components/admin/AdminDashBoard";
import TransactionMangerDashBoard from "./components/transaction-manger/TransactionMangerDashBoard";
import IssueAssignmentDashBoard from "./components/SuperVisor/IssueAssignmentDashBoard";
import IssueAssignmentEditPage from "./components/SuperVisor/IssueAssignmentEditPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* <Route path="/admin" element={<AdAdminDashBoard />}></Route> */}
          <Route path="/supervisor">
            <Route
              path="/supervisor/dashboard"
              element={<IssueAssignmentDashBoard />}
            ></Route>
            <Route
              path="/supervisor/edit"
              element={<IssueAssignmentEditPage />}
            ></Route>
          </Route>
          <Route
            path="/transactionManger"
            element={<TransactionMangerDashBoard />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
