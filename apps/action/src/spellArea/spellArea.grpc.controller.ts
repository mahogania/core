import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SpellAreaService } from "./spellArea.service";
import { SpellAreaGrpcControllerBase } from "./base/spellArea.grpc.controller.base";

@swagger.ApiTags("spellAreas")
@common.Controller("spellAreas")
export class SpellAreaGrpcController extends SpellAreaGrpcControllerBase {
  constructor(protected readonly service: SpellAreaService) {
    super(service);
  }
}
