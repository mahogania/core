import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameEventNpcVendorService } from "./gameEventNpcVendor.service";
import { GameEventNpcVendorGrpcControllerBase } from "./base/gameEventNpcVendor.grpc.controller.base";

@swagger.ApiTags("gameEventNpcVendors")
@common.Controller("gameEventNpcVendors")
export class GameEventNpcVendorGrpcController extends GameEventNpcVendorGrpcControllerBase {
  constructor(protected readonly service: GameEventNpcVendorService) {
    super(service);
  }
}
