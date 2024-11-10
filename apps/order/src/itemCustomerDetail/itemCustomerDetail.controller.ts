import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItemCustomerDetailService } from "./itemCustomerDetail.service";
import { ItemCustomerDetailControllerBase } from "./base/itemCustomerDetail.controller.base";

@swagger.ApiTags("itemCustomerDetails")
@common.Controller("itemCustomerDetails")
export class ItemCustomerDetailController extends ItemCustomerDetailControllerBase {
  constructor(protected readonly service: ItemCustomerDetailService) {
    super(service);
  }
}
