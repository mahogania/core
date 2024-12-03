import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SkillDiscoveryTemplateService } from "./skillDiscoveryTemplate.service";
import { SkillDiscoveryTemplateGrpcControllerBase } from "./base/skillDiscoveryTemplate.grpc.controller.base";

@swagger.ApiTags("skillDiscoveryTemplates")
@common.Controller("skillDiscoveryTemplates")
export class SkillDiscoveryTemplateGrpcController extends SkillDiscoveryTemplateGrpcControllerBase {
  constructor(protected readonly service: SkillDiscoveryTemplateService) {
    super(service);
  }
}
