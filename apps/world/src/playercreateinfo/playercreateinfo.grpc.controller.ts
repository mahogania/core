import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayercreateinfoService } from "./playercreateinfo.service";
import { PlayercreateinfoGrpcControllerBase } from "./base/playercreateinfo.grpc.controller.base";

@swagger.ApiTags("playercreateinfos")
@common.Controller("playercreateinfos")
export class PlayercreateinfoGrpcController extends PlayercreateinfoGrpcControllerBase {
  constructor(protected readonly service: PlayercreateinfoService) {
    super(service);
  }
}
