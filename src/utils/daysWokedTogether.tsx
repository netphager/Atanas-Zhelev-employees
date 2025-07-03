import type { CsvRow } from "../types";

function daysWorkedTogether(emp1: CsvRow, emp2: CsvRow): number {
  if (!emp1.DateTo || !emp2.DateTo) {
    return 0;
  }
  const start =
    emp1.DateFrom > emp2.DateFrom
      ? new Date(emp1.DateFrom)
      : new Date(emp2.DateFrom);
  const end =
    emp1.DateTo < emp2.DateTo ? new Date(emp1.DateTo) : new Date(emp2.DateTo);
  if (end < start) return 0;
  return (
    Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1
  );
}

export function getOverlap(data: CsvRow[]) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      const days = daysWorkedTogether(data[i], data[j]);
      if (days > 0) {
        result.push({
          employeeId1: data[i].EmpID,
          employeeId2: data[j].EmpID,
          projectId: data[i].ProjectID,
          daysWorkedTogether: days,
        });
      }
    }
  }

  return result;
}
