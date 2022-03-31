import { Business } from "../business/Business";
import { Shift } from "../shift/Shift";

export type Employee = {
  business?: Business | null;
  createdAt: Date;
  firstName: string;
  hourlyRate: number;
  id: string;
  lastName: string;
  shifts?: Array<Shift>;
  updatedAt: Date;
};
