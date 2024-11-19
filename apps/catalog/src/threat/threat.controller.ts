import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ThreatService } from "./threat.service";
import { ThreatControllerBase } from "./base/threat.controller.base";

@swagger.ApiTags("threats")
@common.Controller("threats")
export class ThreatController extends ThreatControllerBase {
  constructor(protected readonly service: ThreatService) {
    super(service);
  }
}
