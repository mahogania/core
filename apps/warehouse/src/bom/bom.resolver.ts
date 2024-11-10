import * as graphql from "@nestjs/graphql";
import { BomResolverBase } from "./base/bom.resolver.base";
import { Bom } from "./base/Bom";
import { BomService } from "./bom.service";

@graphql.Resolver(() => Bom)
export class BomResolver extends BomResolverBase {
  constructor(protected readonly service: BomService) {
    super(service);
  }
}
