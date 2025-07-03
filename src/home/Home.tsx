import { useEffect, useState } from "react";
import { useCsvUpload } from "../hooks/useCsvUpload";
import Table from "../table/Table";
import type { PairWorkRow } from "../type";
import { groupByProjectId } from "../utils/groupByProject";
import { getOverlap } from "../utils/daysWokedTogether";

const Home = () => {
  const { csvData, loading, handleFileUpload } = useCsvUpload();
  const [pairs, setPairs] = useState<PairWorkRow[]>([]);
  useEffect(() => {
    if (!csvData) return;

    const groupedData = groupByProjectId(csvData);

    setPairs(
      Object.entries(groupedData)
        .flatMap(([, rows]) => {
          return getOverlap(rows);
        })
        .sort((a, b) => b.daysWorkedTogether - a.daysWorkedTogether) // Sort by days worked together in descending order
    );
  }, [csvData]);

  const columns = [
    { header: "Employee ID #1", accessor: "employeeId1" as const },
    { header: "Employee ID #2", accessor: "employeeId2" as const },
    { header: "Project ID", accessor: "projectId" as const },
    { header: "Days worked", accessor: "daysWorkedTogether" as const },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="block border p-2 rounded w-full"
      />
      {loading && <p>Loading...</p>}

      <Table data={pairs} columns={columns} />
    </div>
  );
};

export default Home;
