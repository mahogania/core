import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LedgerHealthService } from "./ledgerHealth.service";
import { LedgerHealthControllerBase } from "./base/ledgerHealth.controller.base";

@swagger.ApiTags("ledgerHealths")
@common.Controller("ledgerHealths")
export class LedgerHealthController extends LedgerHealthControllerBase {
  constructor(protected readonly service: LedgerHealthService) {
    super(service);
  }
}
