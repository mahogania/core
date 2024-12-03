import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SkillExtraItemTemplateService } from "./skillExtraItemTemplate.service";
import { SkillExtraItemTemplateGrpcControllerBase } from "./base/skillExtraItemTemplate.grpc.controller.base";

@swagger.ApiTags("skillExtraItemTemplates")
@common.Controller("skillExtraItemTemplates")
export class SkillExtraItemTemplateGrpcController extends SkillExtraItemTemplateGrpcControllerBase {
  constructor(protected readonly service: SkillExtraItemTemplateService) {
    super(service);
  }
}
