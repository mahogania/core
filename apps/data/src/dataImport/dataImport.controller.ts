import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DataImportService } from "./dataImport.service";
import { DataImportControllerBase } from "./base/dataImport.controller.base";

@swagger.ApiTags("dataImports")
@common.Controller("dataImports")
export class DataImportController extends DataImportControllerBase {
  constructor(protected readonly service: DataImportService) {
    super(service);
  }
}
