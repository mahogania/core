import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BomWebsiteOperationService } from "./bomWebsiteOperation.service";
import { BomWebsiteOperationControllerBase } from "./base/bomWebsiteOperation.controller.base";

@swagger.ApiTags("bomWebsiteOperations")
@common.Controller("bomWebsiteOperations")
export class BomWebsiteOperationController extends BomWebsiteOperationControllerBase {
  constructor(protected readonly service: BomWebsiteOperationService) {
    super(service);
  }
}
