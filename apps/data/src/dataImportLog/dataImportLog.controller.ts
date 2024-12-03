import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DataImportLogService } from "./dataImportLog.service";
import { DataImportLogControllerBase } from "./base/dataImportLog.controller.base";

@swagger.ApiTags("dataImportLogs")
@common.Controller("dataImportLogs")
export class DataImportLogController extends DataImportLogControllerBase {
  constructor(protected readonly service: DataImportLogService) {
    super(service);
  }
}
