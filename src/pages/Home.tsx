import MetricCards from "../components/card/Card";
import DashboardGrafiq from "../components/dashboardGraficq/DashboardGrafiq";
import DashboardSection from "../components/dashboarSection/DashboardSection";

function Home() {
  return (
    <div>
      <MetricCards />
      <DashboardSection />
      <DashboardGrafiq />
    </div>
  );
}

export default Home;
