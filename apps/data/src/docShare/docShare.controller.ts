import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DocShareService } from "./docShare.service";
import { DocShareControllerBase } from "./base/docShare.controller.base";

@swagger.ApiTags("docShares")
@common.Controller("docShares")
export class DocShareController extends DocShareControllerBase {
  constructor(protected readonly service: DocShareService) {
    super(service);
  }
}
