import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PoolMemberService } from "./poolMember.service";
import { PoolMemberGrpcControllerBase } from "./base/poolMember.grpc.controller.base";

@swagger.ApiTags("poolMembers")
@common.Controller("poolMembers")
export class PoolMemberGrpcController extends PoolMemberGrpcControllerBase {
  constructor(protected readonly service: PoolMemberService) {
    super(service);
  }
}
