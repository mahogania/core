import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AddressTemplateService } from "./addressTemplate.service";
import { AddressTemplateControllerBase } from "./base/addressTemplate.controller.base";

@swagger.ApiTags("addressTemplates")
@common.Controller("addressTemplates")
export class AddressTemplateController extends AddressTemplateControllerBase {
  constructor(protected readonly service: AddressTemplateService) {
    super(service);
  }
}
