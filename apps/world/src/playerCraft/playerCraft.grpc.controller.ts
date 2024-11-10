import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerCraftService } from "./playerCraft.service";
import { PlayerCraftGrpcControllerBase } from "./base/playerCraft.grpc.controller.base";

@swagger.ApiTags("playerCrafts")
@common.Controller("playerCrafts")
export class PlayerCraftGrpcController extends PlayerCraftGrpcControllerBase {
  constructor(protected readonly service: PlayerCraftService) {
    super(service);
  }
}
