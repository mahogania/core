import * as graphql from "@nestjs/graphql";
import { ClearanceDeclarationResolverBase } from "./base/clearanceDeclaration.resolver.base";
import { ClearanceDeclaration } from "./base/ClearanceDeclaration";
import { ClearanceDeclarationService } from "./clearanceDeclaration.service";

@graphql.Resolver(() => ClearanceDeclaration)
export class ClearanceDeclarationResolver extends ClearanceDeclarationResolverBase {
  constructor(protected readonly service: ClearanceDeclarationService) {
    super(service);
  }
}
