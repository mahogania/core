import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LeadService } from "./lead.service";
import { LeadGrpcControllerBase } from "./base/lead.grpc.controller.base";

@swagger.ApiTags("leads")
@common.Controller("leads")
export class LeadGrpcController extends LeadGrpcControllerBase {
  constructor(protected readonly service: LeadService) {
    super(service);
  }
}
