import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerchoiceResponseMawPowerService } from "./playerchoiceResponseMawPower.service";
import { PlayerchoiceResponseMawPowerGrpcControllerBase } from "./base/playerchoiceResponseMawPower.grpc.controller.base";

@swagger.ApiTags("playerchoiceResponseMawPowers")
@common.Controller("playerchoiceResponseMawPowers")
export class PlayerchoiceResponseMawPowerGrpcController extends PlayerchoiceResponseMawPowerGrpcControllerBase {
  constructor(protected readonly service: PlayerchoiceResponseMawPowerService) {
    super(service);
  }
}
