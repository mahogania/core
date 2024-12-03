import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UomConversionDetailService } from "./uomConversionDetail.service";
import { UomConversionDetailControllerBase } from "./base/uomConversionDetail.controller.base";

@swagger.ApiTags("uomConversionDetails")
@common.Controller("uomConversionDetails")
export class UomConversionDetailController extends UomConversionDetailControllerBase {
  constructor(protected readonly service: UomConversionDetailService) {
    super(service);
  }
}
