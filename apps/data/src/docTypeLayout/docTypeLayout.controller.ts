import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DocTypeLayoutService } from "./docTypeLayout.service";
import { DocTypeLayoutControllerBase } from "./base/docTypeLayout.controller.base";

@swagger.ApiTags("docTypeLayouts")
@common.Controller("docTypeLayouts")
export class DocTypeLayoutController extends DocTypeLayoutControllerBase {
  constructor(protected readonly service: DocTypeLayoutService) {
    super(service);
  }
}
