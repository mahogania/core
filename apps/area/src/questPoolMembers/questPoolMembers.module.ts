import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestPoolMembersModuleBase } from "./base/questPoolMembers.module.base";
import { QuestPoolMembersService } from "./questPoolMembers.service";
import { QuestPoolMembersController } from "./questPoolMembers.controller";
import { QuestPoolMembersGrpcController } from "./questPoolMembers.grpc.controller";
import { QuestPoolMembersResolver } from "./questPoolMembers.resolver";

@Module({
  imports: [QuestPoolMembersModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestPoolMembersController, QuestPoolMembersGrpcController],
  providers: [QuestPoolMembersService, QuestPoolMembersResolver],
  exports: [QuestPoolMembersService],
})
export class QuestPoolMembersModule {}
