import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureTemplateLocaleService } from "./creatureTemplateLocale.service";
import { CreatureTemplateLocaleGrpcControllerBase } from "./base/creatureTemplateLocale.grpc.controller.base";

@swagger.ApiTags("creatureTemplateLocales")
@common.Controller("creatureTemplateLocales")
export class CreatureTemplateLocaleGrpcController extends CreatureTemplateLocaleGrpcControllerBase {
  constructor(protected readonly service: CreatureTemplateLocaleService) {
    super(service);
  }
}
