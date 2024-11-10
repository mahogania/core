import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItemSupplierService } from "./itemSupplier.service";
import { ItemSupplierControllerBase } from "./base/itemSupplier.controller.base";

@swagger.ApiTags("itemSuppliers")
@common.Controller("itemSuppliers")
export class ItemSupplierController extends ItemSupplierControllerBase {
  constructor(protected readonly service: ItemSupplierService) {
    super(service);
  }
}
