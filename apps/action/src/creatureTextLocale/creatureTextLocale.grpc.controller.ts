import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureTextLocaleService } from "./creatureTextLocale.service";
import { CreatureTextLocaleGrpcControllerBase } from "./base/creatureTextLocale.grpc.controller.base";

@swagger.ApiTags("creatureTextLocales")
@common.Controller("creatureTextLocales")
export class CreatureTextLocaleGrpcController extends CreatureTextLocaleGrpcControllerBase {
  constructor(protected readonly service: CreatureTextLocaleService) {
    super(service);
  }
}
