import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PickListItemService } from "./pickListItem.service";
import { PickListItemControllerBase } from "./base/pickListItem.controller.base";

@swagger.ApiTags("pickListItems")
@common.Controller("pickListItems")
export class PickListItemController extends PickListItemControllerBase {
  constructor(protected readonly service: PickListItemService) {
    super(service);
  }
}
