import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "2020",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2022",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2023",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "2024",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "2025",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "2026",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "2027",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function DashboardGrafiq() {
  return (
    <div className="flex w-full gap-2 justify-between  bg-slate-800 p-4 rounded-xl shadow">
      <div className="w-full">
        <h3 className="text-lg font-semibold text-slate-200 mb-4">
          Gráfico Dashboard Desempenho
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 12,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/*   <div className="">
        <GraficoRadar />
      </div>
      <div>
        <strong>Another one recharg</strong>
      </div> */}
    </div>
  );
}

export default DashboardGrafiq;
