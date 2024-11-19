import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DynamicLinkService } from "./dynamicLink.service";
import { DynamicLinkControllerBase } from "./base/dynamicLink.controller.base";

@swagger.ApiTags("dynamicLinks")
@common.Controller("dynamicLinks")
export class DynamicLinkController extends DynamicLinkControllerBase {
  constructor(protected readonly service: DynamicLinkService) {
    super(service);
  }
}
