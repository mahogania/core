import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureTemplateSparringService } from "./creatureTemplateSparring.service";
import { CreatureTemplateSparringGrpcControllerBase } from "./base/creatureTemplateSparring.grpc.controller.base";

@swagger.ApiTags("creatureTemplateSparrings")
@common.Controller("creatureTemplateSparrings")
export class CreatureTemplateSparringGrpcController extends CreatureTemplateSparringGrpcControllerBase {
  constructor(protected readonly service: CreatureTemplateSparringService) {
    super(service);
  }
}
