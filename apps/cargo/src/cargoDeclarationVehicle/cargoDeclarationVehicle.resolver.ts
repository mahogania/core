import * as graphql from "@nestjs/graphql";
import { CargoDeclarationVehicleResolverBase } from "./base/cargoDeclarationVehicle.resolver.base";
import { CargoDeclarationVehicle } from "./base/CargoDeclarationVehicle";
import { CargoDeclarationVehicleService } from "./cargoDeclarationVehicle.service";

@graphql.Resolver(() => CargoDeclarationVehicle)
export class CargoDeclarationVehicleResolver extends CargoDeclarationVehicleResolverBase {
  constructor(protected readonly service: CargoDeclarationVehicleService) {
    super(service);
  }
}
