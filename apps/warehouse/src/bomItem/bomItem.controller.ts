import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BomItemService } from "./bomItem.service";
import { BomItemControllerBase } from "./base/bomItem.controller.base";

@swagger.ApiTags("bomItems")
@common.Controller("bomItems")
export class BomItemController extends BomItemControllerBase {
  constructor(protected readonly service: BomItemService) {
    super(service);
  }
}
