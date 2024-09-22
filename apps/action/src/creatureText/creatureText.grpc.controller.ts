import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureTextService } from "./creatureText.service";
import { CreatureTextGrpcControllerBase } from "./base/creatureText.grpc.controller.base";

@swagger.ApiTags("creatureTexts")
@common.Controller("creatureTexts")
export class CreatureTextGrpcController extends CreatureTextGrpcControllerBase {
  constructor(protected readonly service: CreatureTextService) {
    super(service);
  }
}
