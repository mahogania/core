import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerchoiceResponseRewardCurrencyService } from "./playerchoiceResponseRewardCurrency.service";
import { PlayerchoiceResponseRewardCurrencyControllerBase } from "./base/playerchoiceResponseRewardCurrency.controller.base";

@swagger.ApiTags("playerchoiceResponseRewardCurrencies")
@common.Controller("playerchoiceResponseRewardCurrencies")
export class PlayerchoiceResponseRewardCurrencyController extends PlayerchoiceResponseRewardCurrencyControllerBase {
  constructor(
    protected readonly service: PlayerchoiceResponseRewardCurrencyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
