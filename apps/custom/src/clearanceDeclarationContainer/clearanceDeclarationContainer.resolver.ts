import * as graphql from "@nestjs/graphql";
import { ClearanceDeclarationContainerResolverBase } from "./base/clearanceDeclarationContainer.resolver.base";
import { ClearanceDeclarationContainer } from "./base/ClearanceDeclarationContainer";
import { ClearanceDeclarationContainerService } from "./clearanceDeclarationContainer.service";

@graphql.Resolver(() => ClearanceDeclarationContainer)
export class ClearanceDeclarationContainerResolver extends ClearanceDeclarationContainerResolverBase {
  constructor(
    protected readonly service: ClearanceDeclarationContainerService
  ) {
    super(service);
  }
}
