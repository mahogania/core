import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestMailModuleBase } from "./base/questMail.module.base";
import { QuestMailService } from "./questMail.service";
import { QuestMailController } from "./questMail.controller";
import { QuestMailGrpcController } from "./questMail.grpc.controller";
import { QuestMailResolver } from "./questMail.resolver";

@Module({
  imports: [QuestMailModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestMailController, QuestMailGrpcController],
  providers: [QuestMailService, QuestMailResolver],
  exports: [QuestMailService],
})
export class QuestMailModule {}
