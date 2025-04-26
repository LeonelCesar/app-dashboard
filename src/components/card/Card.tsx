import { FC } from "react";
import { Users, TrendingUp, ShoppingCart, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type Metric = {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: "up" | "down";
};

const metrics: Metric[] = [
  {
    title: "Visitantes",
    value: "12.345",
    change: "+8% desde ontem",
    icon: Users,
    trend: "up",
  },
  {
    title: "Vendas",
    value: "R$ 17.760",
    change: "-3% esta semana",
    icon: ShoppingCart,
    trend: "down",
  },
  {
    title: "Novos Usuários",
    value: "18.234",
    change: "+12% este mês",
    icon: TrendingUp,
    trend: "up",
  },
];

const MetricCards: FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <motion.div
            key={index}
            className="bg-slate-800 rounded-2xl shadow-md p-6 flex flex-col gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-2">
              <Icon
                className={`w-6 h-6 ${
                  metric.trend === "up" ? "text-green-500" : "text-red-500"
                }`}
              />
              <p className="text-slate-400 text-sm">{metric.title}</p>
            </div>
            <h2 className="text-3xl font-bold text-white">{metric.value}</h2>
            <span
              className={`text-sm ${
                metric.trend === "up" ? "text-green-500" : "text-red-500"
              }`}
            >
              {metric.change}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default MetricCards;
