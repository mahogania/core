import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AreaTriggerCreatePropertiesPolygonVertexService } from "./areaTriggerCreatePropertiesPolygonVertex.service";
import { AreaTriggerCreatePropertiesPolygonVertexGrpcControllerBase } from "./base/areaTriggerCreatePropertiesPolygonVertex.grpc.controller.base";

@swagger.ApiTags("areaTriggerCreatePropertiesPolygonVertices")
@common.Controller("areaTriggerCreatePropertiesPolygonVertices")
export class AreaTriggerCreatePropertiesPolygonVertexGrpcController extends AreaTriggerCreatePropertiesPolygonVertexGrpcControllerBase {
  constructor(
    protected readonly service: AreaTriggerCreatePropertiesPolygonVertexService
  ) {
    super(service);
  }
}
