import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestPoolMembersService } from "./questPoolMembers.service";
import { QuestPoolMembersGrpcControllerBase } from "./base/questPoolMembers.grpc.controller.base";

@swagger.ApiTags("questPoolMembers")
@common.Controller("questPoolMembers")
export class QuestPoolMembersGrpcController extends QuestPoolMembersGrpcControllerBase {
  constructor(protected readonly service: QuestPoolMembersService) {
    super(service);
  }
}
