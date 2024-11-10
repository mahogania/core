import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorldService } from "./world.service";
import { WorldGrpcControllerBase } from "./base/world.grpc.controller.base";

@swagger.ApiTags("worlds")
@common.Controller("worlds")
export class WorldGrpcController extends WorldGrpcControllerBase {
  constructor(protected readonly service: WorldService) {
    super(service);
  }
}
