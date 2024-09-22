import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NpcTextService } from "./npcText.service";
import { NpcTextGrpcControllerBase } from "./base/npcText.grpc.controller.base";

@swagger.ApiTags("npcTexts")
@common.Controller("npcTexts")
export class NpcTextGrpcController extends NpcTextGrpcControllerBase {
  constructor(protected readonly service: NpcTextService) {
    super(service);
  }
}
