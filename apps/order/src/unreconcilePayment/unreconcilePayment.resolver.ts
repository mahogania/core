import * as graphql from "@nestjs/graphql";
import { UnreconcilePaymentResolverBase } from "./base/unreconcilePayment.resolver.base";
import { UnreconcilePayment } from "./base/UnreconcilePayment";
import { UnreconcilePaymentService } from "./unreconcilePayment.service";

@graphql.Resolver(() => UnreconcilePayment)
export class UnreconcilePaymentResolver extends UnreconcilePaymentResolverBase {
  constructor(protected readonly service: UnreconcilePaymentService) {
    super(service);
  }
}
