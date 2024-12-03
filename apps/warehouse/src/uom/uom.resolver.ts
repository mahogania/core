import * as graphql from "@nestjs/graphql";
import { UomResolverBase } from "./base/uom.resolver.base";
import { Uom } from "./base/Uom";
import { UomService } from "./uom.service";

@graphql.Resolver(() => Uom)
export class UomResolver extends UomResolverBase {
  constructor(protected readonly service: UomService) {
    super(service);
  }
}
