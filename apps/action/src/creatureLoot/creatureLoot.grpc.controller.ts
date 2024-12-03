import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureLootService } from "./creatureLoot.service";
import { CreatureLootGrpcControllerBase } from "./base/creatureLoot.grpc.controller.base";

@swagger.ApiTags("creatureLoots")
@common.Controller("creatureLoots")
export class CreatureLootGrpcController extends CreatureLootGrpcControllerBase {
  constructor(protected readonly service: CreatureLootService) {
    super(service);
  }
}
