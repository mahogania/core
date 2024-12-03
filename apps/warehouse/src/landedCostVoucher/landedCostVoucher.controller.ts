import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LandedCostVoucherService } from "./landedCostVoucher.service";
import { LandedCostVoucherControllerBase } from "./base/landedCostVoucher.controller.base";

@swagger.ApiTags("landedCostVouchers")
@common.Controller("landedCostVouchers")
export class LandedCostVoucherController extends LandedCostVoucherControllerBase {
  constructor(protected readonly service: LandedCostVoucherService) {
    super(service);
  }
}
