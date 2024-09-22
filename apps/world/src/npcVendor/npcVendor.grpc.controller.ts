import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NpcVendorService } from "./npcVendor.service";
import { NpcVendorGrpcControllerBase } from "./base/npcVendor.grpc.controller.base";

@swagger.ApiTags("npcVendors")
@common.Controller("npcVendors")
export class NpcVendorGrpcController extends NpcVendorGrpcControllerBase {
  constructor(protected readonly service: NpcVendorService) {
    super(service);
  }
}
