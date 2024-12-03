import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureQuestItemService } from "./creatureQuestItem.service";
import { CreatureQuestItemGrpcControllerBase } from "./base/creatureQuestItem.grpc.controller.base";

@swagger.ApiTags("creatureQuestItems")
@common.Controller("creatureQuestItems")
export class CreatureQuestItemGrpcController extends CreatureQuestItemGrpcControllerBase {
  constructor(protected readonly service: CreatureQuestItemService) {
    super(service);
  }
}
