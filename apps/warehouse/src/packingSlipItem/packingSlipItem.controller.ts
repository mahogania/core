import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PackingSlipItemService } from "./packingSlipItem.service";
import { PackingSlipItemControllerBase } from "./base/packingSlipItem.controller.base";

@swagger.ApiTags("packingSlipItems")
@common.Controller("packingSlipItems")
export class PackingSlipItemController extends PackingSlipItemControllerBase {
  constructor(protected readonly service: PackingSlipItemService) {
    super(service);
  }
}
