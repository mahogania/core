import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItemManufacturerService } from "./itemManufacturer.service";
import { ItemManufacturerControllerBase } from "./base/itemManufacturer.controller.base";

@swagger.ApiTags("itemManufacturers")
@common.Controller("itemManufacturers")
export class ItemManufacturerController extends ItemManufacturerControllerBase {
  constructor(protected readonly service: ItemManufacturerService) {
    super(service);
  }
}
