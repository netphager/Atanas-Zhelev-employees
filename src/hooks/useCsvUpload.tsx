import Papa from "papaparse";
import { toast } from "react-toastify";
import type { CsvRow } from "../types";
import { validateCsv } from "../utils/validateCSV";
import { useState, type ChangeEvent } from "react";

export function useCsvUpload() {
  const [csvData, setCsvData] = useState<CsvRow[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoading(true);

    Papa.parse<CsvRow>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          const { meta, data } = results;
          validateCsv(meta.fields, data);
          setCsvData(
            data.map((row) => ({
              ...row,
              DateFrom: new Date(row.DateFrom).toISOString(),
              DateTo: new Date(
                row.DateTo && row.DateTo !== "NULL"
                  ? row.DateTo
                  : new Date().toISOString()
              ).toISOString(),
            })) // Convert dates to ISO strings
          );
          toast.success("The file uploaded successfully and is valid!");
        } catch (error) {
          if (error instanceof Error) {
            toast.error(`Invalid CSV: ${error.message}`);
          } else {
            toast.error("An unknown error occurred during CSV validation.");
          }
          setCsvData(null);
        } finally {
          setLoading(false);
        }
      },
      error: (error) => {
        toast.error(`Error parsing CSV: ${error.message}`);
        setLoading(false);
        setCsvData(null);
      },
    });
  };

  return { csvData, loading, handleFileUpload };
}
