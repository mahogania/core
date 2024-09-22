import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerchoiceResponseService } from "./playerchoiceResponse.service";
import { PlayerchoiceResponseGrpcControllerBase } from "./base/playerchoiceResponse.grpc.controller.base";

@swagger.ApiTags("playerchoiceResponses")
@common.Controller("playerchoiceResponses")
export class PlayerchoiceResponseGrpcController extends PlayerchoiceResponseGrpcControllerBase {
  constructor(protected readonly service: PlayerchoiceResponseService) {
    super(service);
  }
}
