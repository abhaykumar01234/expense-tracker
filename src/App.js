import { useState } from "react";
import FormLabelCheckBox from "components/FormLabelCheckbox";
import GroupTable from "components/GroupTable";
import Table from "components/Table/reactTable";
import "./App.css";

function App() {
  const [showAll, setShowAll] = useState(false);
  const handleChange = () => setShowAll((s) => !s);

  return (
    <div>
      <h1>August 2022 Expenses</h1>
      <br />
      <FormLabelCheckBox
        label={`Show ${showAll ? "Grouped" : "All"} Expenses`}
        checked={showAll}
        onChange={handleChange}
      />
      <br />
      {showAll ? <Table /> : <GroupTable />}
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
