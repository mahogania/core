import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureEquipmentService } from "./creatureEquipment.service";
import { CreatureEquipmentGrpcControllerBase } from "./base/creatureEquipment.grpc.controller.base";

@swagger.ApiTags("creatureEquipments")
@common.Controller("creatureEquipments")
export class CreatureEquipmentGrpcController extends CreatureEquipmentGrpcControllerBase {
  constructor(protected readonly service: CreatureEquipmentService) {
    super(service);
  }
}
