import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SkillPerfectItemTemplateService } from "./skillPerfectItemTemplate.service";
import { SkillPerfectItemTemplateGrpcControllerBase } from "./base/skillPerfectItemTemplate.grpc.controller.base";

@swagger.ApiTags("skillPerfectItemTemplates")
@common.Controller("skillPerfectItemTemplates")
export class SkillPerfectItemTemplateGrpcController extends SkillPerfectItemTemplateGrpcControllerBase {
  constructor(protected readonly service: SkillPerfectItemTemplateService) {
    super(service);
  }
}
