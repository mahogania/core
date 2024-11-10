import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChequePrintTemplateService } from "./chequePrintTemplate.service";
import { ChequePrintTemplateControllerBase } from "./base/chequePrintTemplate.controller.base";

@swagger.ApiTags("chequePrintTemplates")
@common.Controller("chequePrintTemplates")
export class ChequePrintTemplateController extends ChequePrintTemplateControllerBase {
  constructor(protected readonly service: ChequePrintTemplateService) {
    super(service);
  }
}
