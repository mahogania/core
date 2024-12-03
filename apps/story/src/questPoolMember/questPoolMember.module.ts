import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestPoolMemberModuleBase } from "./base/questPoolMember.module.base";
import { QuestPoolMemberService } from "./questPoolMember.service";
import { QuestPoolMemberController } from "./questPoolMember.controller";
import { QuestPoolMemberGrpcController } from "./questPoolMember.grpc.controller";
import { QuestPoolMemberResolver } from "./questPoolMember.resolver";

@Module({
  imports: [QuestPoolMemberModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestPoolMemberController, QuestPoolMemberGrpcController],
  providers: [QuestPoolMemberService, QuestPoolMemberResolver],
  exports: [QuestPoolMemberService],
})
export class QuestPoolMemberModule {}
