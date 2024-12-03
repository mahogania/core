import * as graphql from "@nestjs/graphql";
import { WarehouseTypeResolverBase } from "./base/warehouseType.resolver.base";
import { WarehouseType } from "./base/WarehouseType";
import { WarehouseTypeService } from "./warehouseType.service";

@graphql.Resolver(() => WarehouseType)
export class WarehouseTypeResolver extends WarehouseTypeResolverBase {
  constructor(protected readonly service: WarehouseTypeService) {
    super(service);
  }
}
