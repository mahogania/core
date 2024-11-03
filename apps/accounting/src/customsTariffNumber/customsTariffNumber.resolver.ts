import * as graphql from "@nestjs/graphql";
import { CustomsTariffNumberResolverBase } from "./base/customsTariffNumber.resolver.base";
import { CustomsTariffNumber } from "./base/CustomsTariffNumber";
import { CustomsTariffNumberService } from "./customsTariffNumber.service";

@graphql.Resolver(() => CustomsTariffNumber)
export class CustomsTariffNumberResolver extends CustomsTariffNumberResolverBase {
  constructor(protected readonly service: CustomsTariffNumberService) {
    super(service);
  }
}
