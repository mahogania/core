import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItemReorderService } from "./itemReorder.service";
import { ItemReorderControllerBase } from "./base/itemReorder.controller.base";

@swagger.ApiTags("itemReorders")
@common.Controller("itemReorders")
export class ItemReorderController extends ItemReorderControllerBase {
  constructor(protected readonly service: ItemReorderService) {
    super(service);
  }
}
