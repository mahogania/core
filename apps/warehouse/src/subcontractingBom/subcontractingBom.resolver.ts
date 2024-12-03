import * as graphql from "@nestjs/graphql";
import { SubcontractingBomResolverBase } from "./base/subcontractingBom.resolver.base";
import { SubcontractingBom } from "./base/SubcontractingBom";
import { SubcontractingBomService } from "./subcontractingBom.service";

@graphql.Resolver(() => SubcontractingBom)
export class SubcontractingBomResolver extends SubcontractingBomResolverBase {
  constructor(protected readonly service: SubcontractingBomService) {
    super(service);
  }
}
