import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WarrantyClaimService } from "./warrantyClaim.service";
import { WarrantyClaimControllerBase } from "./base/warrantyClaim.controller.base";

@swagger.ApiTags("warrantyClaims")
@common.Controller("warrantyClaims")
export class WarrantyClaimController extends WarrantyClaimControllerBase {
  constructor(protected readonly service: WarrantyClaimService) {
    super(service);
  }
}
