import * as graphql from "@nestjs/graphql";
import { CargoDeclarationContainerResolverBase } from "./base/cargoDeclarationContainer.resolver.base";
import { CargoDeclarationContainer } from "./base/CargoDeclarationContainer";
import { CargoDeclarationContainerService } from "./cargoDeclarationContainer.service";

@graphql.Resolver(() => CargoDeclarationContainer)
export class CargoDeclarationContainerResolver extends CargoDeclarationContainerResolverBase {
  constructor(protected readonly service: CargoDeclarationContainerService) {
    super(service);
  }
}
