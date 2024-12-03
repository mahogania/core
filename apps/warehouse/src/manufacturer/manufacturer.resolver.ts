import * as graphql from "@nestjs/graphql";
import { ManufacturerResolverBase } from "./base/manufacturer.resolver.base";
import { Manufacturer } from "./base/Manufacturer";
import { ManufacturerService } from "./manufacturer.service";

@graphql.Resolver(() => Manufacturer)
export class ManufacturerResolver extends ManufacturerResolverBase {
  constructor(protected readonly service: ManufacturerService) {
    super(service);
  }
}
