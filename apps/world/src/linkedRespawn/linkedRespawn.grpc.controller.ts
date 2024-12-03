import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LinkedRespawnService } from "./linkedRespawn.service";
import { LinkedRespawnGrpcControllerBase } from "./base/linkedRespawn.grpc.controller.base";

@swagger.ApiTags("linkedRespawns")
@common.Controller("linkedRespawns")
export class LinkedRespawnGrpcController extends LinkedRespawnGrpcControllerBase {
  constructor(protected readonly service: LinkedRespawnService) {
    super(service);
  }
}
