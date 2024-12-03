import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UomConversionFactorService } from "./uomConversionFactor.service";
import { UomConversionFactorControllerBase } from "./base/uomConversionFactor.controller.base";

@swagger.ApiTags("uomConversionFactors")
@common.Controller("uomConversionFactors")
export class UomConversionFactorController extends UomConversionFactorControllerBase {
  constructor(protected readonly service: UomConversionFactorService) {
    super(service);
  }
}
