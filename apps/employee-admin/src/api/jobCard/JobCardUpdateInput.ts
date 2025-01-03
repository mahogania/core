export type JobCardUpdateInput = {
  actualEndDate?: Date | null;
  actualStartDate?: Date | null;
  amendedFrom?: string | null;
  barcode?: string | null;
  batchNo?: string | null;
  bomNo?: string | null;
  company?: string | null;
  creation?: Date | null;
  currentTime?: number | null;
  docstatus?: number | null;
  expectedEndDate?: Date | null;
  expectedStartDate?: Date | null;
  forJobCard?: string | null;
  forOperation?: string | null;
  forQuantity?: number | null;
  hourRate?: number | null;
  idx?: number | null;
  isCorrectiveJobCard?: number | null;
  itemName?: string | null;
  jobStarted?: number | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  namingSeries?: string | null;
  operation?: string | null;
  operationId?: string | null;
  operationRowNumber?: string | null;
  owner?: string | null;
  postingDate?: Date | null;
  processLossQty?: number | null;
  productionItem?: string | null;
  project?: string | null;
  qualityInspection?: string | null;
  qualityInspectionTemplate?: string | null;
  remarks?: string | null;
  requestedQty?: number | null;
  sequenceId?: number | null;
  serialAndBatchBundle?: string | null;
  serialNo?: string | null;
  startedTime?: Date | null;
  status?: string | null;
  timeRequired?: number | null;
  totalCompletedQty?: number | null;
  totalTimeInMins?: number | null;
  transferredQty?: number | null;
  wipWarehouse?: string | null;
  workOrder?: string | null;
  workstation?: string | null;
  workstationType?: string | null;
};
