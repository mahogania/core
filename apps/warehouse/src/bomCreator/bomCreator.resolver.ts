import * as graphql from "@nestjs/graphql";
import { BomCreatorResolverBase } from "./base/bomCreator.resolver.base";
import { BomCreator } from "./base/BomCreator";
import { BomCreatorService } from "./bomCreator.service";

@graphql.Resolver(() => BomCreator)
export class BomCreatorResolver extends BomCreatorResolverBase {
  constructor(protected readonly service: BomCreatorService) {
    super(service);
  }
}
