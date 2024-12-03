import * as graphql from "@nestjs/graphql";
import { CargoDeclarationTransportResolverBase } from "./base/cargoDeclarationTransport.resolver.base";
import { CargoDeclarationTransport } from "./base/CargoDeclarationTransport";
import { CargoDeclarationTransportService } from "./cargoDeclarationTransport.service";

@graphql.Resolver(() => CargoDeclarationTransport)
export class CargoDeclarationTransportResolver extends CargoDeclarationTransportResolverBase {
  constructor(protected readonly service: CargoDeclarationTransportService) {
    super(service);
  }
}
