import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  businessId?: SortOrder;
  createdAt?: SortOrder;
  firstName?: SortOrder;
  hourlyRate?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
};
