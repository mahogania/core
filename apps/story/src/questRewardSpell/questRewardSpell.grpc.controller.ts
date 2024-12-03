import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestRewardSpellService } from "./questRewardSpell.service";
import { QuestRewardSpellGrpcControllerBase } from "./base/questRewardSpell.grpc.controller.base";

@swagger.ApiTags("questRewardSpells")
@common.Controller("questRewardSpells")
export class QuestRewardSpellGrpcController extends QuestRewardSpellGrpcControllerBase {
  constructor(protected readonly service: QuestRewardSpellService) {
    super(service);
  }
}
