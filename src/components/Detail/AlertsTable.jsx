import React from "react";
import eve from "../../eve.json";

function AlertsTable() {
  return (
    <div className=" pt-10 lg:pt-0 ">
      <h1 className=" text-zinc-900 text-lg font-semibold font-['Inter'] leading-tight dark:text-white lg:flex-none lg:p-5 lg:text-center p-2 text-center">
        Signature of Attack
      </h1>
      <div className="lg:h-[60vh] h-[70vh] m-5  overflow-hidden overflow-y-scroll overflow-x-scroll no-scrollbar bg-slate-50 dark:text-white rounded-2xl lg:p-10 lg:pt-0 dark:bg-white/5">
        <table className="w-full ">
          <thead className="bg-slate-50 p-3 pt-0  sticky top-0  dark:bg-[#242427]  dark:text-white">
            <tr>
              <th className="text-left p-2">Timestamp</th>
              <th className="text-left p-2">Severity</th>
              <th className="text-left p-2">Signature</th>
              <th className="text-left p-2">Category</th>
            </tr>
          </thead>
          <tbody className="">
            {eve
              .filter((event) => event.event_type === "alert")
              .map((alert, i) => (
                <tr key={i} className="">
                  <td className="p-2">{alert.timestamp}</td>
                  <td className="p-2">{alert.alert?.severity}</td>
                  <td className="p-2">{alert.alert?.signature}</td>
                  <td className="p-2"> {alert.alert?.category}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AlertsTable;
