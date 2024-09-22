import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerchoiceResponseLocaleService } from "./playerchoiceResponseLocale.service";
import { PlayerchoiceResponseLocaleGrpcControllerBase } from "./base/playerchoiceResponseLocale.grpc.controller.base";

@swagger.ApiTags("playerchoiceResponseLocales")
@common.Controller("playerchoiceResponseLocales")
export class PlayerchoiceResponseLocaleGrpcController extends PlayerchoiceResponseLocaleGrpcControllerBase {
  constructor(protected readonly service: PlayerchoiceResponseLocaleService) {
    super(service);
  }
}
