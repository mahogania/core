import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MountDefinitionsService } from "./mountDefinitions.service";
import { MountDefinitionsGrpcControllerBase } from "./base/mountDefinitions.grpc.controller.base";

@swagger.ApiTags("mountDefinitions")
@common.Controller("mountDefinitions")
export class MountDefinitionsGrpcController extends MountDefinitionsGrpcControllerBase {
  constructor(protected readonly service: MountDefinitionsService) {
    super(service);
  }
}
