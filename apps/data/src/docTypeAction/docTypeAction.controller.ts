import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DocTypeActionService } from "./docTypeAction.service";
import { DocTypeActionControllerBase } from "./base/docTypeAction.controller.base";

@swagger.ApiTags("docTypeActions")
@common.Controller("docTypeActions")
export class DocTypeActionController extends DocTypeActionControllerBase {
  constructor(protected readonly service: DocTypeActionService) {
    super(service);
  }
}
