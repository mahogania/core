import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SkillTiersService } from "./skillTiers.service";
import { SkillTiersGrpcControllerBase } from "./base/skillTiers.grpc.controller.base";

@swagger.ApiTags("skillTiers")
@common.Controller("skillTiers")
export class SkillTiersGrpcController extends SkillTiersGrpcControllerBase {
  constructor(protected readonly service: SkillTiersService) {
    super(service);
  }
}
