import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DesignationService } from "./designation.service";
import { DesignationControllerBase } from "./base/designation.controller.base";

@swagger.ApiTags("designations")
@common.Controller("designations")
export class DesignationController extends DesignationControllerBase {
  constructor(protected readonly service: DesignationService) {
    super(service);
  }
}
