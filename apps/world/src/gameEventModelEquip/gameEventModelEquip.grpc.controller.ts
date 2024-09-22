import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameEventModelEquipService } from "./gameEventModelEquip.service";
import { GameEventModelEquipGrpcControllerBase } from "./base/gameEventModelEquip.grpc.controller.base";

@swagger.ApiTags("gameEventModelEquips")
@common.Controller("gameEventModelEquips")
export class GameEventModelEquipGrpcController extends GameEventModelEquipGrpcControllerBase {
  constructor(protected readonly service: GameEventModelEquipService) {
    super(service);
  }
}
