import * as graphql from "@nestjs/graphql";
import { BomOperationResolverBase } from "./base/bomOperation.resolver.base";
import { BomOperation } from "./base/BomOperation";
import { BomOperationService } from "./bomOperation.service";

@graphql.Resolver(() => BomOperation)
export class BomOperationResolver extends BomOperationResolverBase {
  constructor(protected readonly service: BomOperationService) {
    super(service);
  }
}
