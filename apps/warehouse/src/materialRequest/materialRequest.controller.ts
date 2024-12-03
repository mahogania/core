import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MaterialRequestService } from "./materialRequest.service";
import { MaterialRequestControllerBase } from "./base/materialRequest.controller.base";

@swagger.ApiTags("materialRequests")
@common.Controller("materialRequests")
export class MaterialRequestController extends MaterialRequestControllerBase {
  constructor(protected readonly service: MaterialRequestService) {
    super(service);
  }
}
