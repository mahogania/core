import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureService } from "./creature.service";
import { CreatureGrpcControllerBase } from "./base/creature.grpc.controller.base";

@swagger.ApiTags("creatures")
@common.Controller("creatures")
export class CreatureGrpcController extends CreatureGrpcControllerBase {
  constructor(protected readonly service: CreatureService) {
    super(service);
  }
}
