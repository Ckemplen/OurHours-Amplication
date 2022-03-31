import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type BusinessWhereInput = {
  employees?: EmployeeListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
};
