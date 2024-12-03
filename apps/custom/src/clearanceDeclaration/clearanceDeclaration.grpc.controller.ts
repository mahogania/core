import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClearanceDeclarationService } from "./clearanceDeclaration.service";
import { ClearanceDeclarationGrpcControllerBase } from "./base/clearanceDeclaration.grpc.controller.base";

@swagger.ApiTags("clearanceDeclarations")
@common.Controller("clearanceDeclarations")
export class ClearanceDeclarationGrpcController extends ClearanceDeclarationGrpcControllerBase {
  constructor(protected readonly service: ClearanceDeclarationService) {
    super(service);
  }
}
