import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StrengthService } from "./strength.service";
import { StrengthControllerBase } from "./base/strength.controller.base";

@swagger.ApiTags("strengths")
@common.Controller("strengths")
export class StrengthController extends StrengthControllerBase {
  constructor(protected readonly service: StrengthService) {
    super(service);
  }
}
