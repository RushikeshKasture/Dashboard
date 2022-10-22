import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Clients from "../Pages/Clients";
import HelpDesk from "../Pages/HelpDesk";
import Invoice from "../Pages/Invoice";
import MyTask from "../Pages/MyTask";
import Project from "../Pages/Project";
import Reports from "../Pages/Reports";
import Settings from "../Pages/Settings";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/helpdesk" element={<HelpDesk />} />
      <Route path="/invoice" element={<Invoice />} />
      <Route path="/myrask" element={<MyTask />} />
      <Route path="/project" element={<Project />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default Router;
