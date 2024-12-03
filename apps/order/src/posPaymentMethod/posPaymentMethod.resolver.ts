import * as graphql from "@nestjs/graphql";
import { PosPaymentMethodResolverBase } from "./base/posPaymentMethod.resolver.base";
import { PosPaymentMethod } from "./base/PosPaymentMethod";
import { PosPaymentMethodService } from "./posPaymentMethod.service";

@graphql.Resolver(() => PosPaymentMethod)
export class PosPaymentMethodResolver extends PosPaymentMethodResolverBase {
  constructor(protected readonly service: PosPaymentMethodService) {
    super(service);
  }
}
