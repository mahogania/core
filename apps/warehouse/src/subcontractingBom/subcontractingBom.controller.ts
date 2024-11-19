import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubcontractingBomService } from "./subcontractingBom.service";
import { SubcontractingBomControllerBase } from "./base/subcontractingBom.controller.base";

@swagger.ApiTags("subcontractingBoms")
@common.Controller("subcontractingBoms")
export class SubcontractingBomController extends SubcontractingBomControllerBase {
  constructor(protected readonly service: SubcontractingBomService) {
    super(service);
  }
}
