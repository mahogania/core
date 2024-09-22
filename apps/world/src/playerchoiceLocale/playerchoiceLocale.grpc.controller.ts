import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerchoiceLocaleService } from "./playerchoiceLocale.service";
import { PlayerchoiceLocaleGrpcControllerBase } from "./base/playerchoiceLocale.grpc.controller.base";

@swagger.ApiTags("playerchoiceLocales")
@common.Controller("playerchoiceLocales")
export class PlayerchoiceLocaleGrpcController extends PlayerchoiceLocaleGrpcControllerBase {
  constructor(protected readonly service: PlayerchoiceLocaleService) {
    super(service);
  }
}
