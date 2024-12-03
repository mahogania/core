import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScriptSplineChainMetaService } from "./scriptSplineChainMeta.service";
import { ScriptSplineChainMetaGrpcControllerBase } from "./base/scriptSplineChainMeta.grpc.controller.base";

@swagger.ApiTags("scriptSplineChainMetas")
@common.Controller("scriptSplineChainMetas")
export class ScriptSplineChainMetaGrpcController extends ScriptSplineChainMetaGrpcControllerBase {
  constructor(protected readonly service: ScriptSplineChainMetaService) {
    super(service);
  }
}
