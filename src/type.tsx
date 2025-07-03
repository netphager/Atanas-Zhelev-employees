import { z } from "zod";

export const csvRowSchema = z.object({
  EmpID: z.string().regex(/^\d+$/, "EmpID must be a number"),
  ProjectID: z.string().regex(/^\d+$/, "ProjectID must be a number"),
  DateFrom: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "DateFrom must be a valid date",
  }),
  DateTo: z
    .string()
    .nullable()
    .refine(
      (val) =>
        !isNaN(
          Date.parse(val === "NULL" || !val ? new Date().toISOString() : val)
        ),
      {
        message: "DateTo must be a valid date or NULL",
      }
    ),
});

export type CsvRow = z.infer<typeof csvRowSchema>;

export type PairWorkRow = {
  employeeId1: string;
  employeeId2: string;
  projectId: string;
  daysWorkedTogether: number;
};
