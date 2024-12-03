import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PickListService } from "./pickList.service";
import { PickListControllerBase } from "./base/pickList.controller.base";

@swagger.ApiTags("pickLists")
@common.Controller("pickLists")
export class PickListController extends PickListControllerBase {
  constructor(protected readonly service: PickListService) {
    super(service);
  }
}
