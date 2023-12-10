import { useEffect, useState } from "react";
import CostList from "./components/Costs/CostList";
import CostForm from "./components/NewCost/CostForm";
import NewCost from "./components/NewCost/NewCost";
import axios from "axios";
import Diagram from "./components/Diagram/Diagram";

const App = () => {

  const [costs, setCosts] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2022");

  const fetchCosts = async () => {
    const { data } = await axios.get(`http://localhost:8000/api/costs/?year=${selectedYear}`);
    console.log(data);
    setCosts((prevCosts) => data);
  };

  const deleteCost = async (id) => {
    await axios.delete(`http://localhost:8000/api/costs/${id}/`)
    fetchCosts()
  }

  useEffect(() => {
    fetchCosts();
  }, [selectedYear]);

  const addCostHandler = async (cost) => {
    await axios.post("http://localhost:8000/api/costs/", cost);
    fetchCosts();
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <CostList
        costs={costs}
        selectedYear={selectedYear}
        onYearChange={(year) => setSelectedYear(year)}
        onDeleteCost={deleteCost}
      />
    </div>
  );
};

export default App;
