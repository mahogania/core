import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IndustryTypeService } from "./industryType.service";
import { IndustryTypeControllerBase } from "./base/industryType.controller.base";

@swagger.ApiTags("industryTypes")
@common.Controller("industryTypes")
export class IndustryTypeController extends IndustryTypeControllerBase {
  constructor(protected readonly service: IndustryTypeService) {
    super(service);
  }
}
