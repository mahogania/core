import * as graphql from "@nestjs/graphql";
import { DunningResolverBase } from "./base/dunning.resolver.base";
import { Dunning } from "./base/Dunning";
import { DunningService } from "./dunning.service";

@graphql.Resolver(() => Dunning)
export class DunningResolver extends DunningResolverBase {
  constructor(protected readonly service: DunningService) {
    super(service);
  }
}
