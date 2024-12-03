import * as graphql from "@nestjs/graphql";
import { UomConversionFactorResolverBase } from "./base/uomConversionFactor.resolver.base";
import { UomConversionFactor } from "./base/UomConversionFactor";
import { UomConversionFactorService } from "./uomConversionFactor.service";

@graphql.Resolver(() => UomConversionFactor)
export class UomConversionFactorResolver extends UomConversionFactorResolverBase {
  constructor(protected readonly service: UomConversionFactorService) {
    super(service);
  }
}
