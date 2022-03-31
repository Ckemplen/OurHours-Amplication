export type ShiftCreateInput = {
  actualFinish?: Date | null;
  actualStart?: Date | null;
  scheduledFinish: Date;
  scheduledStart: Date;
};
