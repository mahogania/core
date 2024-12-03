import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomsTariffNumberService } from "./customsTariffNumber.service";
import { CustomsTariffNumberControllerBase } from "./base/customsTariffNumber.controller.base";

@swagger.ApiTags("customsTariffNumbers")
@common.Controller("customsTariffNumbers")
export class CustomsTariffNumberController extends CustomsTariffNumberControllerBase {
  constructor(protected readonly service: CustomsTariffNumberService) {
    super(service);
  }
}
