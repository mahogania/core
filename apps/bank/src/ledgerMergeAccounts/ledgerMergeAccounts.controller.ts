import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LedgerMergeAccountsService } from "./ledgerMergeAccounts.service";
import { LedgerMergeAccountsControllerBase } from "./base/ledgerMergeAccounts.controller.base";

@swagger.ApiTags("ledgerMergeAccounts")
@common.Controller("ledgerMergeAccounts")
export class LedgerMergeAccountsController extends LedgerMergeAccountsControllerBase {
  constructor(protected readonly service: LedgerMergeAccountsService) {
    super(service);
  }
}
