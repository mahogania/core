import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BomWebsiteItemService } from "./bomWebsiteItem.service";
import { BomWebsiteItemControllerBase } from "./base/bomWebsiteItem.controller.base";

@swagger.ApiTags("bomWebsiteItems")
@common.Controller("bomWebsiteItems")
export class BomWebsiteItemController extends BomWebsiteItemControllerBase {
  constructor(protected readonly service: BomWebsiteItemService) {
    super(service);
  }
}
