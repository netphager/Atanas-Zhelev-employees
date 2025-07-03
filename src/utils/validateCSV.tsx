import { csvRowSchema, type CsvRow } from "../type";

export const validateCsv = (headers: string[] | undefined, rows: CsvRow[]) => {
  const expectedHeaders = ["EmpID", "ProjectID", "DateFrom", "DateTo"] as const;

  if (!headers) {
    throw new Error("CSV file has no headers.");
  }

  for (let i = 0; i < expectedHeaders.length; i++) {
    const expected = expectedHeaders[i];
    const actual = headers[i]?.trim();
    if (actual !== expected) {
      throw new Error(
        `Invalid header at column ${
          i + 1
        }: expected "${expected}", got "${actual}"`
      );
    }
  }

  rows.forEach((row, index) => {
    const result = csvRowSchema.safeParse(row);
    if (!result.success) {
      const errorMessages = result.error.errors
        .map((e) => `${e.path.join(".")}: ${e.message}`)
        .join("; ");
      throw new Error(`Row ${index + 2} invalid: ${errorMessages}`);
    }
  });
};
