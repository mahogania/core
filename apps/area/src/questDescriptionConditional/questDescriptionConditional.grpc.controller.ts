import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestDescriptionConditionalService } from "./questDescriptionConditional.service";
import { QuestDescriptionConditionalGrpcControllerBase } from "./base/questDescriptionConditional.grpc.controller.base";

@swagger.ApiTags("questDescriptionConditionals")
@common.Controller("questDescriptionConditionals")
export class QuestDescriptionConditionalGrpcController extends QuestDescriptionConditionalGrpcControllerBase {
  constructor(protected readonly service: QuestDescriptionConditionalService) {
    super(service);
  }
}
