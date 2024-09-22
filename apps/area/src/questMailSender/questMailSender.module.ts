import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestMailSenderModuleBase } from "./base/questMailSender.module.base";
import { QuestMailSenderService } from "./questMailSender.service";
import { QuestMailSenderController } from "./questMailSender.controller";
import { QuestMailSenderGrpcController } from "./questMailSender.grpc.controller";
import { QuestMailSenderResolver } from "./questMailSender.resolver";

@Module({
  imports: [QuestMailSenderModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestMailSenderController, QuestMailSenderGrpcController],
  providers: [QuestMailSenderService, QuestMailSenderResolver],
  exports: [QuestMailSenderService],
})
export class QuestMailSenderModule {}
