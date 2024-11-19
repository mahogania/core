import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GeneStatService } from "./geneStat.service";
import { GeneStatGrpcControllerBase } from "./base/geneStat.grpc.controller.base";

@swagger.ApiTags("geneStats")
@common.Controller("geneStats")
export class GeneStatGrpcController extends GeneStatGrpcControllerBase {
  constructor(protected readonly service: GeneStatService) {
    super(service);
  }
}
