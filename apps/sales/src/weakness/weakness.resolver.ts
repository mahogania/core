import * as graphql from "@nestjs/graphql";
import { WeaknessResolverBase } from "./base/weakness.resolver.base";
import { Weakness } from "./base/Weakness";
import { WeaknessService } from "./weakness.service";

@graphql.Resolver(() => Weakness)
export class WeaknessResolver extends WeaknessResolverBase {
  constructor(protected readonly service: WeaknessService) {
    super(service);
  }
}
