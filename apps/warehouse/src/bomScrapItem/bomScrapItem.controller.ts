import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BomScrapItemService } from "./bomScrapItem.service";
import { BomScrapItemControllerBase } from "./base/bomScrapItem.controller.base";

@swagger.ApiTags("bomScrapItems")
@common.Controller("bomScrapItems")
export class BomScrapItemController extends BomScrapItemControllerBase {
  constructor(protected readonly service: BomScrapItemService) {
    super(service);
  }
}
