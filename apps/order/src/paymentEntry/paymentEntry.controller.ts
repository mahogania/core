import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentEntryService } from "./paymentEntry.service";
import { PaymentEntryControllerBase } from "./base/paymentEntry.controller.base";

@swagger.ApiTags("paymentEntries")
@common.Controller("paymentEntries")
export class PaymentEntryController extends PaymentEntryControllerBase {
  constructor(protected readonly service: PaymentEntryService) {
    super(service);
  }
}
