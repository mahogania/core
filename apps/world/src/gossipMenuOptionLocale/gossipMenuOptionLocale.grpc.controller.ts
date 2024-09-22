import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GossipMenuOptionLocaleService } from "./gossipMenuOptionLocale.service";
import { GossipMenuOptionLocaleGrpcControllerBase } from "./base/gossipMenuOptionLocale.grpc.controller.base";

@swagger.ApiTags("gossipMenuOptionLocales")
@common.Controller("gossipMenuOptionLocales")
export class GossipMenuOptionLocaleGrpcController extends GossipMenuOptionLocaleGrpcControllerBase {
  constructor(protected readonly service: GossipMenuOptionLocaleService) {
    super(service);
  }
}
