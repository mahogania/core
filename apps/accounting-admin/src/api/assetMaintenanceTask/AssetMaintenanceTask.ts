export type AssetMaintenanceTask = {
  assignTo: string | null;
  assignToName: string | null;
  certificateRequired: number | null;
  createdAt: Date;
  creation: Date | null;
  description: string | null;
  docstatus: number | null;
  endDate: Date | null;
  id: string;
  idx: number | null;
  lastCompletionDate: Date | null;
  maintenanceStatus: string | null;
  maintenanceTask: string | null;
  maintenanceType: string | null;
  modified: Date | null;
  modifiedBy: string | null;
  name: string | null;
  nextDueDate: Date | null;
  owner: string | null;
  parent: string | null;
  parentField: string | null;
  parentType: string | null;
  periodicity: string | null;
  startDate: Date | null;
  updatedAt: Date;
};
