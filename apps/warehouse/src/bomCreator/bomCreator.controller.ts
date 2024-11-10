import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BomCreatorService } from "./bomCreator.service";
import { BomCreatorControllerBase } from "./base/bomCreator.controller.base";

@swagger.ApiTags("bomCreators")
@common.Controller("bomCreators")
export class BomCreatorController extends BomCreatorControllerBase {
  constructor(protected readonly service: BomCreatorService) {
    super(service);
  }
}
