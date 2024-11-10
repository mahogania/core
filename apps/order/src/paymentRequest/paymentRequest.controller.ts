import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentRequestService } from "./paymentRequest.service";
import { PaymentRequestControllerBase } from "./base/paymentRequest.controller.base";

@swagger.ApiTags("paymentRequests")
@common.Controller("paymentRequests")
export class PaymentRequestController extends PaymentRequestControllerBase {
  constructor(protected readonly service: PaymentRequestService) {
    super(service);
  }
}
