import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BomExplosionItemService } from "./bomExplosionItem.service";
import { BomExplosionItemControllerBase } from "./base/bomExplosionItem.controller.base";

@swagger.ApiTags("bomExplosionItems")
@common.Controller("bomExplosionItems")
export class BomExplosionItemController extends BomExplosionItemControllerBase {
  constructor(protected readonly service: BomExplosionItemService) {
    super(service);
  }
}
