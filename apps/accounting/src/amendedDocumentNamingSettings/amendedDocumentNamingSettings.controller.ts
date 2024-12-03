import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AmendedDocumentNamingSettingsService } from "./amendedDocumentNamingSettings.service";
import { AmendedDocumentNamingSettingsControllerBase } from "./base/amendedDocumentNamingSettings.controller.base";

@swagger.ApiTags("amendedDocumentNamingSettings")
@common.Controller("amendedDocumentNamingSettings")
export class AmendedDocumentNamingSettingsController extends AmendedDocumentNamingSettingsControllerBase {
  constructor(
    protected readonly service: AmendedDocumentNamingSettingsService
  ) {
    super(service);
  }
}
