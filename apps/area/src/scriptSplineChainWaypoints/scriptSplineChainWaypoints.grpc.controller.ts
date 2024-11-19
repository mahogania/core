import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScriptSplineChainWaypointsService } from "./scriptSplineChainWaypoints.service";
import { ScriptSplineChainWaypointsGrpcControllerBase } from "./base/scriptSplineChainWaypoints.grpc.controller.base";

@swagger.ApiTags("scriptSplineChainWaypoints")
@common.Controller("scriptSplineChainWaypoints")
export class ScriptSplineChainWaypointsGrpcController extends ScriptSplineChainWaypointsGrpcControllerBase {
  constructor(protected readonly service: ScriptSplineChainWaypointsService) {
    super(service);
  }
}
