import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AllowedDimensionService } from "./allowedDimension.service";
import { AllowedDimensionControllerBase } from "./base/allowedDimension.controller.base";

@swagger.ApiTags("allowedDimensions")
@common.Controller("allowedDimensions")
export class AllowedDimensionController extends AllowedDimensionControllerBase {
  constructor(protected readonly service: AllowedDimensionService) {
    super(service);
  }
}
