import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConstraintService } from "./constraint.service";
import { ConstraintControllerBase } from "./base/constraint.controller.base";

@swagger.ApiTags("constraints")
@common.Controller("constraints")
export class ConstraintController extends ConstraintControllerBase {
  constructor(protected readonly service: ConstraintService) {
    super(service);
  }
}
