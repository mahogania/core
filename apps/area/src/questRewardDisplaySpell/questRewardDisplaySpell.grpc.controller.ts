import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestRewardDisplaySpellService } from "./questRewardDisplaySpell.service";
import { QuestRewardDisplaySpellGrpcControllerBase } from "./base/questRewardDisplaySpell.grpc.controller.base";

@swagger.ApiTags("questRewardDisplaySpells")
@common.Controller("questRewardDisplaySpells")
export class QuestRewardDisplaySpellGrpcController extends QuestRewardDisplaySpellGrpcControllerBase {
  constructor(protected readonly service: QuestRewardDisplaySpellService) {
    super(service);
  }
}
