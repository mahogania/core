import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureTemplateModelService } from "./creatureTemplateModel.service";
import { CreatureTemplateModelGrpcControllerBase } from "./base/creatureTemplateModel.grpc.controller.base";

@swagger.ApiTags("creatureTemplateModels")
@common.Controller("creatureTemplateModels")
export class CreatureTemplateModelGrpcController extends CreatureTemplateModelGrpcControllerBase {
  constructor(protected readonly service: CreatureTemplateModelService) {
    super(service);
  }
}
