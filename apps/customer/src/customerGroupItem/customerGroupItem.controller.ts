import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomerGroupItemService } from "./customerGroupItem.service";
import { CustomerGroupItemControllerBase } from "./base/customerGroupItem.controller.base";

@swagger.ApiTags("customerGroupItems")
@common.Controller("customerGroupItems")
export class CustomerGroupItemController extends CustomerGroupItemControllerBase {
  constructor(protected readonly service: CustomerGroupItemService) {
    super(service);
  }
}
