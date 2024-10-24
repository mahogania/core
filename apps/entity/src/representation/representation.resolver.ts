import * as graphql from "@nestjs/graphql";
import { RepresentationResolverBase } from "./base/representation.resolver.base";
import { Representation } from "./base/Representation";
import { RepresentationService } from "./representation.service";

@graphql.Resolver(() => Representation)
export class RepresentationResolver extends RepresentationResolverBase {
  constructor(protected readonly service: RepresentationService) {
    super(service);
  }
}
