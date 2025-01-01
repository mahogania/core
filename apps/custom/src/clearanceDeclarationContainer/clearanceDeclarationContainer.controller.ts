import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClearanceDeclarationContainerService } from "./clearanceDeclarationContainer.service";
import { ClearanceDeclarationContainerControllerBase } from "./base/clearanceDeclarationContainer.controller.base";

@swagger.ApiTags("clearanceDeclarationContainers")
@common.Controller("clearanceDeclarationContainers")
export class ClearanceDeclarationContainerController extends ClearanceDeclarationContainerControllerBase {
  constructor(
    protected readonly service: ClearanceDeclarationContainerService
  ) {
    super(service);
  }
}
