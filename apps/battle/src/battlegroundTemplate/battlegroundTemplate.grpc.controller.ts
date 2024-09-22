import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BattlegroundTemplateService } from "./battlegroundTemplate.service";
import { BattlegroundTemplateGrpcControllerBase } from "./base/battlegroundTemplate.grpc.controller.base";

@swagger.ApiTags("battlegroundTemplates")
@common.Controller("battlegroundTemplates")
export class BattlegroundTemplateGrpcController extends BattlegroundTemplateGrpcControllerBase {
  constructor(protected readonly service: BattlegroundTemplateService) {
    super(service);
  }
}
