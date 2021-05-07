import BarChart from "components/BarChat";
import DonutChart from "components/DonutChart";
import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="App">
                <h1 className="text-primary py-3">Dashboard</h1>
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text secondary">Taxa de Sucesso(%)</h5>
                        <BarChart />
                    </div>

                    <div className="col-sm-6">
                        <h5 className="text-center text secondary">Todas as Vendas</h5>
                        <DonutChart />
                    </div>
                </div>
                <div className="py-3"></div>
                <h2 className="text-primary">Todas as vendas</h2>
                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
