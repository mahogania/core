import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DocTypeStateService } from "./docTypeState.service";
import { DocTypeStateControllerBase } from "./base/docTypeState.controller.base";

@swagger.ApiTags("docTypeStates")
@common.Controller("docTypeStates")
export class DocTypeStateController extends DocTypeStateControllerBase {
  constructor(protected readonly service: DocTypeStateService) {
    super(service);
  }
}
