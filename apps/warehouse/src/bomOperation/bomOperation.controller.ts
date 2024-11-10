import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BomOperationService } from "./bomOperation.service";
import { BomOperationControllerBase } from "./base/bomOperation.controller.base";

@swagger.ApiTags("bomOperations")
@common.Controller("bomOperations")
export class BomOperationController extends BomOperationControllerBase {
  constructor(protected readonly service: BomOperationService) {
    super(service);
  }
}
