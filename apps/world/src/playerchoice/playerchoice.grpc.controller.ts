import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerchoiceService } from "./playerchoice.service";
import { PlayerchoiceGrpcControllerBase } from "./base/playerchoice.grpc.controller.base";

@swagger.ApiTags("playerchoices")
@common.Controller("playerchoices")
export class PlayerchoiceGrpcController extends PlayerchoiceGrpcControllerBase {
  constructor(protected readonly service: PlayerchoiceService) {
    super(service);
  }
}
