import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureQuestCurrencyService } from "./creatureQuestCurrency.service";
import { CreatureQuestCurrencyGrpcControllerBase } from "./base/creatureQuestCurrency.grpc.controller.base";

@swagger.ApiTags("creatureQuestCurrencies")
@common.Controller("creatureQuestCurrencies")
export class CreatureQuestCurrencyGrpcController extends CreatureQuestCurrencyGrpcControllerBase {
  constructor(protected readonly service: CreatureQuestCurrencyService) {
    super(service);
  }
}
