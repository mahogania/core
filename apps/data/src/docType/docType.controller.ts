import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DocTypeService } from "./docType.service";
import { DocTypeControllerBase } from "./base/docType.controller.base";

@swagger.ApiTags("docTypes")
@common.Controller("docTypes")
export class DocTypeController extends DocTypeControllerBase {
  constructor(protected readonly service: DocTypeService) {
    super(service);
  }
}
