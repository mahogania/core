import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IndustryService } from "./industry.service";
import { IndustryControllerBase } from "./base/industry.controller.base";

@swagger.ApiTags("industries")
@common.Controller("industries")
export class IndustryController extends IndustryControllerBase {
  constructor(protected readonly service: IndustryService) {
    super(service);
  }
}
