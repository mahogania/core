import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DocTypeLinkService } from "./docTypeLink.service";
import { DocTypeLinkControllerBase } from "./base/docTypeLink.controller.base";

@swagger.ApiTags("docTypeLinks")
@common.Controller("docTypeLinks")
export class DocTypeLinkController extends DocTypeLinkControllerBase {
  constructor(protected readonly service: DocTypeLinkService) {
    super(service);
  }
}
