import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PoolMembersService } from "./poolMembers.service";
import { PoolMembersGrpcControllerBase } from "./base/poolMembers.grpc.controller.base";

@swagger.ApiTags("poolMembers")
@common.Controller("poolMembers")
export class PoolMembersGrpcController extends PoolMembersGrpcControllerBase {
  constructor(protected readonly service: PoolMembersService) {
    super(service);
  }
}
