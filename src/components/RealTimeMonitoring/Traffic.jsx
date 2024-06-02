import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import eve from "../../eve.json";
function Traffic() {
  return (
    <div className="m-5  ">
      <h1 className=" text-zinc-900 text-lg font-semibold font-['Inter'] leading-tight dark:text-white lg:flex-none lg:p-5 lg:text-center p-2 text-center">
        Event Type
      </h1>
      <div className=" rounded-2xl w-full h-[40vh]  flex justify-center items-center lg:h-[60vh] bg-slate-50 dark:bg-white/5">
        <Line
          data={{
            labels: eve.map((items) => items.event_type),
            datasets: [
              {
                label: "x-event-type & y-alert-rev",
                data: eve.map((items) => items.alert?.rev),
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default Traffic;
