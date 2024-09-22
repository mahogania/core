import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureTemplateGossipService } from "./creatureTemplateGossip.service";
import { CreatureTemplateGossipGrpcControllerBase } from "./base/creatureTemplateGossip.grpc.controller.base";

@swagger.ApiTags("creatureTemplateGossips")
@common.Controller("creatureTemplateGossips")
export class CreatureTemplateGossipGrpcController extends CreatureTemplateGossipGrpcControllerBase {
  constructor(protected readonly service: CreatureTemplateGossipService) {
    super(service);
  }
}
