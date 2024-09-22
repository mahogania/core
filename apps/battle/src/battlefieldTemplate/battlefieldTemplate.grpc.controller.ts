import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BattlefieldTemplateService } from "./battlefieldTemplate.service";
import { BattlefieldTemplateGrpcControllerBase } from "./base/battlefieldTemplate.grpc.controller.base";

@swagger.ApiTags("battlefieldTemplates")
@common.Controller("battlefieldTemplates")
export class BattlefieldTemplateGrpcController extends BattlefieldTemplateGrpcControllerBase {
  constructor(protected readonly service: BattlefieldTemplateService) {
    super(service);
  }
}
