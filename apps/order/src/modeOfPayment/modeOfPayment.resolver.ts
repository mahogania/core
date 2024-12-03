import * as graphql from "@nestjs/graphql";
import { ModeOfPaymentResolverBase } from "./base/modeOfPayment.resolver.base";
import { ModeOfPayment } from "./base/ModeOfPayment";
import { ModeOfPaymentService } from "./modeOfPayment.service";

@graphql.Resolver(() => ModeOfPayment)
export class ModeOfPaymentResolver extends ModeOfPaymentResolverBase {
  constructor(protected readonly service: ModeOfPaymentService) {
    super(service);
  }
}
