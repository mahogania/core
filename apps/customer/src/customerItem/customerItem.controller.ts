import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomerItemService } from "./customerItem.service";
import { CustomerItemControllerBase } from "./base/customerItem.controller.base";

@swagger.ApiTags("customerItems")
@common.Controller("customerItems")
export class CustomerItemController extends CustomerItemControllerBase {
  constructor(protected readonly service: CustomerItemService) {
    super(service);
  }
}
