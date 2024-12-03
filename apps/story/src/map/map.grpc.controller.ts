import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MapService } from "./map.service";
import { MapGrpcControllerBase } from "./base/map.grpc.controller.base";

@swagger.ApiTags("maps")
@common.Controller("maps")
export class MapGrpcController extends MapGrpcControllerBase {
  constructor(protected readonly service: MapService) {
    super(service);
  }
}
