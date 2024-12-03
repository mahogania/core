import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CraftService } from "./craft.service";
import { CraftGrpcControllerBase } from "./base/craft.grpc.controller.base";

@swagger.ApiTags("crafts")
@common.Controller("crafts")
export class CraftGrpcController extends CraftGrpcControllerBase {
  constructor(protected readonly service: CraftService) {
    super(service);
  }
}
