import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubcontractingOrderServiceItemService } from "./subcontractingOrderServiceItem.service";
import { SubcontractingOrderServiceItemControllerBase } from "./base/subcontractingOrderServiceItem.controller.base";

@swagger.ApiTags("subcontractingOrderServiceItems")
@common.Controller("subcontractingOrderServiceItems")
export class SubcontractingOrderServiceItemController extends SubcontractingOrderServiceItemControllerBase {
  constructor(
    protected readonly service: SubcontractingOrderServiceItemService
  ) {
    super(service);
  }
}
