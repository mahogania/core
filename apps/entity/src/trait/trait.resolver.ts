import * as graphql from "@nestjs/graphql";
import { TraitResolverBase } from "./base/trait.resolver.base";
import { Trait } from "./base/Trait";
import { TraitService } from "./trait.service";

@graphql.Resolver(() => Trait)
export class TraitResolver extends TraitResolverBase {
  constructor(protected readonly service: TraitService) {
    super(service);
  }
}
