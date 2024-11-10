import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DocPermService } from "./docPerm.service";
import { DocPermControllerBase } from "./base/docPerm.controller.base";

@swagger.ApiTags("docPerms")
@common.Controller("docPerms")
export class DocPermController extends DocPermControllerBase {
  constructor(protected readonly service: DocPermService) {
    super(service);
  }
}
