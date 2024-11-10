import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MaterialRequestItemService } from "./materialRequestItem.service";
import { MaterialRequestItemControllerBase } from "./base/materialRequestItem.controller.base";

@swagger.ApiTags("materialRequestItems")
@common.Controller("materialRequestItems")
export class MaterialRequestItemController extends MaterialRequestItemControllerBase {
  constructor(protected readonly service: MaterialRequestItemService) {
    super(service);
  }
}
