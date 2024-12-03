import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StatementOfAccountsService } from "./statementOfAccounts.service";
import { StatementOfAccountsControllerBase } from "./base/statementOfAccounts.controller.base";

@swagger.ApiTags("statementOfAccounts")
@common.Controller("statementOfAccounts")
export class StatementOfAccountsController extends StatementOfAccountsControllerBase {
  constructor(protected readonly service: StatementOfAccountsService) {
    super(service);
  }
}
