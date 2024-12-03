import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentGatewayAccountService } from "./paymentGatewayAccount.service";
import { PaymentGatewayAccountControllerBase } from "./base/paymentGatewayAccount.controller.base";

@swagger.ApiTags("paymentGatewayAccounts")
@common.Controller("paymentGatewayAccounts")
export class PaymentGatewayAccountController extends PaymentGatewayAccountControllerBase {
  constructor(protected readonly service: PaymentGatewayAccountService) {
    super(service);
  }
}
