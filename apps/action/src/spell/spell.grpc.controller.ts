import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SpellService } from "./spell.service";
import { SpellGrpcControllerBase } from "./base/spell.grpc.controller.base";

@swagger.ApiTags("spells")
@common.Controller("spells")
export class SpellGrpcController extends SpellGrpcControllerBase {
  constructor(protected readonly service: SpellService) {
    super(service);
  }
}
