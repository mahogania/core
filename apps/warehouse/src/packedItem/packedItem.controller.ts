import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PackedItemService } from "./packedItem.service";
import { PackedItemControllerBase } from "./base/packedItem.controller.base";

@swagger.ApiTags("packedItems")
@common.Controller("packedItems")
export class PackedItemController extends PackedItemControllerBase {
  constructor(protected readonly service: PackedItemService) {
    super(service);
  }
}
