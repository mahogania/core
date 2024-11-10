import { DataImportWhereInput } from "./DataImportWhereInput";
import { DataImportOrderByInput } from "./DataImportOrderByInput";

export type DataImportFindManyArgs = {
  where?: DataImportWhereInput;
  orderBy?: Array<DataImportOrderByInput>;
  skip?: number;
  take?: number;
};
