import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BankStatementImportService } from "./bankStatementImport.service";
import { BankStatementImportControllerBase } from "./base/bankStatementImport.controller.base";

@swagger.ApiTags("bankStatementImports")
@common.Controller("bankStatementImports")
export class BankStatementImportController extends BankStatementImportControllerBase {
  constructor(protected readonly service: BankStatementImportService) {
    super(service);
  }
}
