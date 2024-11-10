import * as graphql from "@nestjs/graphql";
import { PaymentGatewayAccountResolverBase } from "./base/paymentGatewayAccount.resolver.base";
import { PaymentGatewayAccount } from "./base/PaymentGatewayAccount";
import { PaymentGatewayAccountService } from "./paymentGatewayAccount.service";

@graphql.Resolver(() => PaymentGatewayAccount)
export class PaymentGatewayAccountResolver extends PaymentGatewayAccountResolverBase {
  constructor(protected readonly service: PaymentGatewayAccountService) {
    super(service);
  }
}
