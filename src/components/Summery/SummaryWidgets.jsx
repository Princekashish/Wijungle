import React from "react";
import eve from "../../eve.json";

function SummaryWidgets() {
  const totalTraffic = eve.length;
  const totalAlerts = eve.filter((item) => item.event_type === "alert").length;
  return (
    <div className="p-5 lg:p-20">
      <div className=" text-zinc-900 text-lg font-semibold font-['Inter'] leading-tight dark:text-white ">
        Dashboard
      </div>
      <div className="flex flex-col gap-5 justify-center items-center pt-5 lg:flex-row lg:justify-center lg:gap-20 ">
        <div className="w-full h-[140px] lg:h-28 lg:w-[202px]  p-6 bg-sky-100 rounded-2xl flex-col justify-start items-start gap-2 ">
          <h1 className="w-[318px] text-black/opacity-20 text-base font-medium font-['Poppins'] leading-normal text-zinc-900 ">
            Total Traffic
          </h1>
          <p className="text-zinc-900 text-2xl font-semibold font-['Inter'] leading-9 tracking-wide">
            {totalTraffic}
          </p>
        </div>
        <div className="w-full h-[140px] lg:w-[202px] lg:h-28 p-6 bg-slate-200 rounded-2xl flex-col justify-start items-start gap-2 ">
          <h1 className="w-[318px] text-zinc-900 text-black/opacity-20 text-base font-medium font-['Poppins'] leading-normal">
            Total Alerts
          </h1>
          <p className="text-zinc-900 text-2xl font-semibold font-['Inter'] leading-9 tracking-wide">
            {totalAlerts}
          </p>
        </div>
        <div className="w-full h-[140px] lg:h-28 lg:w-[202px]  p-6 bg-sky-100 rounded-2xl flex-col justify-start items-start gap-2 ">
          <h1 className="w-[318px] text-black/opacity-20 text-base font-medium font-['Poppins'] leading-normal text-zinc-900">
            System Status
          </h1>
          <p className="text-zinc-900 text-2xl font-semibold font-['Inter'] leading-9 tracking-wide">
            {totalAlerts > 0 ? "Alert" : "Normal"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SummaryWidgets;
