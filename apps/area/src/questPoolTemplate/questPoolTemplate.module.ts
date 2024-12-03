import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestPoolTemplateModuleBase } from "./base/questPoolTemplate.module.base";
import { QuestPoolTemplateService } from "./questPoolTemplate.service";
import { QuestPoolTemplateController } from "./questPoolTemplate.controller";
import { QuestPoolTemplateGrpcController } from "./questPoolTemplate.grpc.controller";
import { QuestPoolTemplateResolver } from "./questPoolTemplate.resolver";

@Module({
  imports: [QuestPoolTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestPoolTemplateController, QuestPoolTemplateGrpcController],
  providers: [QuestPoolTemplateService, QuestPoolTemplateResolver],
  exports: [QuestPoolTemplateService],
})
export class QuestPoolTemplateModule {}
