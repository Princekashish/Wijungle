import React from "react";
import TrafficTable from "../Detail/TrafficTable";
import { Line } from "react-chartjs-2";
import eve from "../../eve.json";

function Reale() {
  return (
    <div className="p-5   lg:h-[70vh] ">
      <div className="h-screen gap-5 w-full  flex overflow-hidden flex-col-reverse lg:flex-row-reverse lg:justify-center lg:gap-5">
        <div className="">
          <TrafficTable />
        </div>
        <div className=" rounded-2xl w-full h-[40%] lg:h-[60%] bg-slate-50 dark:bg-white/5">
          <Line
            data={{
              labels: eve.map((items) => items.src_ip),
              datasets: [
                {
                  label: "x-src-ip & y-src-port",
                  data: eve.map((items) => items.src_port),
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Reale;
