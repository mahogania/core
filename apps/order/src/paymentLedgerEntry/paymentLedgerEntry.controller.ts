import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentLedgerEntryService } from "./paymentLedgerEntry.service";
import { PaymentLedgerEntryControllerBase } from "./base/paymentLedgerEntry.controller.base";

@swagger.ApiTags("paymentLedgerEntries")
@common.Controller("paymentLedgerEntries")
export class PaymentLedgerEntryController extends PaymentLedgerEntryControllerBase {
  constructor(protected readonly service: PaymentLedgerEntryService) {
    super(service);
  }
}
