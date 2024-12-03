import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentOrderReferenceService } from "./paymentOrderReference.service";
import { PaymentOrderReferenceControllerBase } from "./base/paymentOrderReference.controller.base";

@swagger.ApiTags("paymentOrderReferences")
@common.Controller("paymentOrderReferences")
export class PaymentOrderReferenceController extends PaymentOrderReferenceControllerBase {
  constructor(protected readonly service: PaymentOrderReferenceService) {
    super(service);
  }
}
