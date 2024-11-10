import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestPoolMemberService } from "./questPoolMember.service";
import { QuestPoolMemberGrpcControllerBase } from "./base/questPoolMember.grpc.controller.base";

@swagger.ApiTags("questPoolMembers")
@common.Controller("questPoolMembers")
export class QuestPoolMemberGrpcController extends QuestPoolMemberGrpcControllerBase {
  constructor(protected readonly service: QuestPoolMemberService) {
    super(service);
  }
}
