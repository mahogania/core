import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UnreconcilePaymentEntriesService } from "./unreconcilePaymentEntries.service";
import { UnreconcilePaymentEntriesControllerBase } from "./base/unreconcilePaymentEntries.controller.base";

@swagger.ApiTags("unreconcilePaymentEntries")
@common.Controller("unreconcilePaymentEntries")
export class UnreconcilePaymentEntriesController extends UnreconcilePaymentEntriesControllerBase {
  constructor(protected readonly service: UnreconcilePaymentEntriesService) {
    super(service);
  }
}
