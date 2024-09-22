import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerchoiceResponseRewardCurrencyService } from "./playerchoiceResponseRewardCurrency.service";
import { PlayerchoiceResponseRewardCurrencyGrpcControllerBase } from "./base/playerchoiceResponseRewardCurrency.grpc.controller.base";

@swagger.ApiTags("playerchoiceResponseRewardCurrencies")
@common.Controller("playerchoiceResponseRewardCurrencies")
export class PlayerchoiceResponseRewardCurrencyGrpcController extends PlayerchoiceResponseRewardCurrencyGrpcControllerBase {
  constructor(
    protected readonly service: PlayerchoiceResponseRewardCurrencyService
  ) {
    super(service);
  }
}
