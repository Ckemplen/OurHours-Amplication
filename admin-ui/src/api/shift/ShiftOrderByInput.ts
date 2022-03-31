import { SortOrder } from "../../util/SortOrder";

export type ShiftOrderByInput = {
  actualFinish?: SortOrder;
  actualStart?: SortOrder;
  createdAt?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  scheduledFinish?: SortOrder;
  scheduledStart?: SortOrder;
  updatedAt?: SortOrder;
};
