import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BisectNodesService } from "./bisectNodes.service";
import { BisectNodesControllerBase } from "./base/bisectNodes.controller.base";

@swagger.ApiTags("bisectNodes")
@common.Controller("bisectNodes")
export class BisectNodesController extends BisectNodesControllerBase {
  constructor(protected readonly service: BisectNodesService) {
    super(service);
  }
}
