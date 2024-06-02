import React from "react";
import eve from "../../eve.json";

function TrafficTable() {
  return (
    <div className="h-[60vh]   dark:bg-white/5 dark:text-white overflow-hidden overflow-y-scroll overflow-x-scroll  no-scrollbar bg-slate-50 rounded-2xl lg:p-10 lg:pt-0">
      <table className="w-full ">
        <thead className="bg-slate-50 sticky top-0  dark:bg-[#242427]">
          <tr>
            <th className="text-left p-2">Src IP</th>
            <th className="text-left p-2">Src Port</th>
            <th className="text-left p-2">Dest IP</th>
            <th className="text-left p-2">Dest Port</th>
            <th className="text-left p-2">Protocol</th>
          </tr>
        </thead>
        <tbody className="">
          {eve.map((event) => (
            <tr key={event.flow_id}>
              <td className="p-2">{event.src_ip}</td>
              <td className="p-2">{event.src_port}</td>
              <td className="p-2">{event.dest_ip}</td>
              <td className="p-2">{event.dest_port}</td>
              <td className="p-2">{event.proto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrafficTable;
