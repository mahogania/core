import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureTemplateMovementService } from "./creatureTemplateMovement.service";
import { CreatureTemplateMovementGrpcControllerBase } from "./base/creatureTemplateMovement.grpc.controller.base";

@swagger.ApiTags("creatureTemplateMovements")
@common.Controller("creatureTemplateMovements")
export class CreatureTemplateMovementGrpcController extends CreatureTemplateMovementGrpcControllerBase {
  constructor(protected readonly service: CreatureTemplateMovementService) {
    super(service);
  }
}
