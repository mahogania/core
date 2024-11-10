import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClientScriptService } from "./clientScript.service";
import { ClientScriptControllerBase } from "./base/clientScript.controller.base";

@swagger.ApiTags("clientScripts")
@common.Controller("clientScripts")
export class ClientScriptController extends ClientScriptControllerBase {
  constructor(protected readonly service: ClientScriptService) {
    super(service);
  }
}
