import React from "react";
import { Doughnut, PolarArea } from "react-chartjs-2";
import eve from "../../eve.json";

// Function to filter out consecutive duplicates
const filterConsecutiveDuplicates = (array) => {
  return array.filter(
    (item, index) => index === 0 || item !== array[index - 1]
  );
};

// Function to get color based on protocol
const getColorForProtocol = (proto) => {
  return proto === "TCP"
    ? "rgba(75, 192, 192, 0.6)"
    : "rgba(255, 159, 64, 0.6)";
};

function FlowChart() {
  // Filter protocols to remove consecutive duplicates
  const uniqueProtocols = filterConsecutiveDuplicates(
    eve.map((item) => item.proto)
  );
  const uniqueProtocolss = filterConsecutiveDuplicates(
    eve.map((item) => item.alert?.gid)
  );

  // Get corresponding colors for the filtered protocols
  const backgroundColor = uniqueProtocols.map((proto) =>
    getColorForProtocol(proto)
  );

  return (
    <div className="m-5  lg:h-[70vh] h-screen ">
      <h1 className=" text-zinc-900 text-lg font-semibold font-['Inter'] leading-tight dark:text-white lg:flex-none lg:p-5 lg:text-center p-2">
        Flow Chart
      </h1>
      <div className="flex justify-center flex-col lg:flex-row items-center lg:justify-center gap-4 ">
        <div className="h-[50vh] w-full bg-slate-50 rounded-2xl  dark:bg-white/5 flex justify-center items-center">
          <Doughnut
            data={{
              labels: ["TCP","UDP","TCP"],
              datasets: [
                {
                  label: "x-src-ip & y-src-port",
                  data: eve
                    .filter(
                      (item, index) =>
                        index === 0 || item.proto !== eve[index - 1].proto
                    )
                    .map((item) => item.dest_port),
                  borderRadius: false,
                },
              ],
            }}
          />
        </div>
        <div className="h-[50vh] w-full flex justify-center items-center  dark:bg-white/5    bg-slate-50 rounded-2xl dark:text-white">
          <PolarArea
            data={{
              labels:[],
              datasets: [
                {
                  label: "Signature-id",
                  data: eve.map((items) => items.alert?.signature_id),
                
                  borderAlign: 2,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default FlowChart;
