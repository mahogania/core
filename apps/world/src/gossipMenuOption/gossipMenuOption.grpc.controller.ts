import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GossipMenuOptionService } from "./gossipMenuOption.service";
import { GossipMenuOptionGrpcControllerBase } from "./base/gossipMenuOption.grpc.controller.base";

@swagger.ApiTags("gossipMenuOptions")
@common.Controller("gossipMenuOptions")
export class GossipMenuOptionGrpcController extends GossipMenuOptionGrpcControllerBase {
  constructor(protected readonly service: GossipMenuOptionService) {
    super(service);
  }
}
