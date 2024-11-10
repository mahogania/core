import * as graphql from "@nestjs/graphql";
import { PaymentRequestResolverBase } from "./base/paymentRequest.resolver.base";
import { PaymentRequest } from "./base/PaymentRequest";
import { PaymentRequestService } from "./paymentRequest.service";

@graphql.Resolver(() => PaymentRequest)
export class PaymentRequestResolver extends PaymentRequestResolverBase {
  constructor(protected readonly service: PaymentRequestService) {
    super(service);
  }
}
