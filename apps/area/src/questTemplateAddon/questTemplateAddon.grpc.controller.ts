import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestTemplateAddonService } from "./questTemplateAddon.service";
import { QuestTemplateAddonGrpcControllerBase } from "./base/questTemplateAddon.grpc.controller.base";

@swagger.ApiTags("questTemplateAddons")
@common.Controller("questTemplateAddons")
export class QuestTemplateAddonGrpcController extends QuestTemplateAddonGrpcControllerBase {
  constructor(protected readonly service: QuestTemplateAddonService) {
    super(service);
  }
}
