import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PoolService } from "./pool.service";
import { PoolGrpcControllerBase } from "./base/pool.grpc.controller.base";

@swagger.ApiTags("pools")
@common.Controller("pools")
export class PoolGrpcController extends PoolGrpcControllerBase {
  constructor(protected readonly service: PoolService) {
    super(service);
  }
}
