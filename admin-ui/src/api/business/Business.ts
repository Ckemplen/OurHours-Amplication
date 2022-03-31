import { Employee } from "../employee/Employee";

export type Business = {
  createdAt: Date;
  employees?: Array<Employee>;
  id: string;
  name: string;
  updatedAt: Date;
};
