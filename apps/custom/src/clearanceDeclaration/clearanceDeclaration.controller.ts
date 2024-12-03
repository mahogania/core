import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClearanceDeclarationService } from "./clearanceDeclaration.service";
import { ClearanceDeclarationControllerBase } from "./base/clearanceDeclaration.controller.base";

@swagger.ApiTags("clearanceDeclarations")
@common.Controller("clearanceDeclarations")
export class ClearanceDeclarationController extends ClearanceDeclarationControllerBase {
  constructor(protected readonly service: ClearanceDeclarationService) {
    super(service);
  }
}
