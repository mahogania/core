import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AllowedToTransactWithService } from "./allowedToTransactWith.service";
import { AllowedToTransactWithControllerBase } from "./base/allowedToTransactWith.controller.base";

@swagger.ApiTags("allowedToTransactWiths")
@common.Controller("allowedToTransactWiths")
export class AllowedToTransactWithController extends AllowedToTransactWithControllerBase {
  constructor(protected readonly service: AllowedToTransactWithService) {
    super(service);
  }
}
