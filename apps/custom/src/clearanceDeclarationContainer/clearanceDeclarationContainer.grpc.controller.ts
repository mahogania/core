import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClearanceDeclarationContainerService } from "./clearanceDeclarationContainer.service";
import { ClearanceDeclarationContainerGrpcControllerBase } from "./base/clearanceDeclarationContainer.grpc.controller.base";

@swagger.ApiTags("clearanceDeclarationContainers")
@common.Controller("clearanceDeclarationContainers")
export class ClearanceDeclarationContainerGrpcController extends ClearanceDeclarationContainerGrpcControllerBase {
  constructor(
    protected readonly service: ClearanceDeclarationContainerService
  ) {
    super(service);
  }
}
