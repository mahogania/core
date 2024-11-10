import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestTemplateModuleBase } from "./base/questTemplate.module.base";
import { QuestTemplateService } from "./questTemplate.service";
import { QuestTemplateController } from "./questTemplate.controller";
import { QuestTemplateGrpcController } from "./questTemplate.grpc.controller";
import { QuestTemplateResolver } from "./questTemplate.resolver";

@Module({
  imports: [QuestTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestTemplateController, QuestTemplateGrpcController],
  providers: [QuestTemplateService, QuestTemplateResolver],
  exports: [QuestTemplateService],
})
export class QuestTemplateModule {}
