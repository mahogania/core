import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalesOrderItemService } from "./salesOrderItem.service";
import { SalesOrderItemControllerBase } from "./base/salesOrderItem.controller.base";

@swagger.ApiTags("salesOrderItems")
@common.Controller("salesOrderItems")
export class SalesOrderItemController extends SalesOrderItemControllerBase {
  constructor(protected readonly service: SalesOrderItemService) {
    super(service);
  }
}
