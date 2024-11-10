import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MailLootTemplateService } from "./mailLootTemplate.service";
import { MailLootTemplateGrpcControllerBase } from "./base/mailLootTemplate.grpc.controller.base";

@swagger.ApiTags("mailLootTemplates")
@common.Controller("mailLootTemplates")
export class MailLootTemplateGrpcController extends MailLootTemplateGrpcControllerBase {
  constructor(protected readonly service: MailLootTemplateService) {
    super(service);
  }
}
