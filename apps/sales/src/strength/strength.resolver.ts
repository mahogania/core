import * as graphql from "@nestjs/graphql";
import { StrengthResolverBase } from "./base/strength.resolver.base";
import { Strength } from "./base/Strength";
import { StrengthService } from "./strength.service";

@graphql.Resolver(() => Strength)
export class StrengthResolver extends StrengthResolverBase {
  constructor(protected readonly service: StrengthService) {
    super(service);
  }
}
