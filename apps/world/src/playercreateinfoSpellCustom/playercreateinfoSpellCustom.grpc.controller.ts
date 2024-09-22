import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayercreateinfoSpellCustomService } from "./playercreateinfoSpellCustom.service";
import { PlayercreateinfoSpellCustomGrpcControllerBase } from "./base/playercreateinfoSpellCustom.grpc.controller.base";

@swagger.ApiTags("playercreateinfoSpellCustoms")
@common.Controller("playercreateinfoSpellCustoms")
export class PlayercreateinfoSpellCustomGrpcController extends PlayercreateinfoSpellCustomGrpcControllerBase {
  constructor(protected readonly service: PlayercreateinfoSpellCustomService) {
    super(service);
  }
}
