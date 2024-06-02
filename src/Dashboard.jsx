import React from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import eve from "./eve";
import SummaryWidgets from "./components/Summery/SummaryWidgets";
import TrafficTable from "./components/Detail/TrafficTable";
import Reale from "./components/RealTimeMonitoring/Reale";
import AlertsTable from "./components/Detail/AlertsTable";
import FlowChart from "./components/RealTimeMonitoring/FlowChart";
import Traffic from "./components/RealTimeMonitoring/Traffic";
import Thems from "./components/Thems";

function Dashboard() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <Thems />

      <SummaryWidgets />
      <Reale />

      <FlowChart />
      <AlertsTable />
      <Traffic />

      {/* barchart */}
    
    </div>
  );
}

export default Dashboard;
