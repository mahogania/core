import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeferredAccountingService } from "./deferredAccounting.service";
import { DeferredAccountingControllerBase } from "./base/deferredAccounting.controller.base";

@swagger.ApiTags("deferredAccountings")
@common.Controller("deferredAccountings")
export class DeferredAccountingController extends DeferredAccountingControllerBase {
  constructor(protected readonly service: DeferredAccountingService) {
    super(service);
  }
}
