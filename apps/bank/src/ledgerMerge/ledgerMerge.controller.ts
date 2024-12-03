import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LedgerMergeService } from "./ledgerMerge.service";
import { LedgerMergeControllerBase } from "./base/ledgerMerge.controller.base";

@swagger.ApiTags("ledgerMerges")
@common.Controller("ledgerMerges")
export class LedgerMergeController extends LedgerMergeControllerBase {
  constructor(protected readonly service: LedgerMergeService) {
    super(service);
  }
}
