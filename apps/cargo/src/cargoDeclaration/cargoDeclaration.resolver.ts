import * as graphql from "@nestjs/graphql";
import { CargoDeclarationResolverBase } from "./base/cargoDeclaration.resolver.base";
import { CargoDeclaration } from "./base/CargoDeclaration";
import { CargoDeclarationService } from "./cargoDeclaration.service";

@graphql.Resolver(() => CargoDeclaration)
export class CargoDeclarationResolver extends CargoDeclarationResolverBase {
  constructor(protected readonly service: CargoDeclarationService) {
    super(service);
  }
}
