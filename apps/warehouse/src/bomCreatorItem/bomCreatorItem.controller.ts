import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BomCreatorItemService } from "./bomCreatorItem.service";
import { BomCreatorItemControllerBase } from "./base/bomCreatorItem.controller.base";

@swagger.ApiTags("bomCreatorItems")
@common.Controller("bomCreatorItems")
export class BomCreatorItemController extends BomCreatorItemControllerBase {
  constructor(protected readonly service: BomCreatorItemService) {
    super(service);
  }
}
