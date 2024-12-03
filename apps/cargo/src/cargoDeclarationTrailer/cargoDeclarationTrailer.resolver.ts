import * as graphql from "@nestjs/graphql";
import { CargoDeclarationTrailerResolverBase } from "./base/cargoDeclarationTrailer.resolver.base";
import { CargoDeclarationTrailer } from "./base/CargoDeclarationTrailer";
import { CargoDeclarationTrailerService } from "./cargoDeclarationTrailer.service";

@graphql.Resolver(() => CargoDeclarationTrailer)
export class CargoDeclarationTrailerResolver extends CargoDeclarationTrailerResolverBase {
  constructor(protected readonly service: CargoDeclarationTrailerService) {
    super(service);
  }
}
