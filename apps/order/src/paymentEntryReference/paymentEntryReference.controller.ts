import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentEntryReferenceService } from "./paymentEntryReference.service";
import { PaymentEntryReferenceControllerBase } from "./base/paymentEntryReference.controller.base";

@swagger.ApiTags("paymentEntryReferences")
@common.Controller("paymentEntryReferences")
export class PaymentEntryReferenceController extends PaymentEntryReferenceControllerBase {
  constructor(protected readonly service: PaymentEntryReferenceService) {
    super(service);
  }
}
