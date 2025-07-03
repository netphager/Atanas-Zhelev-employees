import type { CsvRow } from "../type";

export function groupByProjectId(data: CsvRow[]) {
  return data.reduce<Record<string, CsvRow[]>>((acc, item) => {
    if (!acc[item.ProjectID]) {
      acc[item.ProjectID] = [];
    }
    acc[item.ProjectID].push(item);
    return acc;
  }, {});
}
