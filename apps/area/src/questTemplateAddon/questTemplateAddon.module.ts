import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestTemplateAddonModuleBase } from "./base/questTemplateAddon.module.base";
import { QuestTemplateAddonService } from "./questTemplateAddon.service";
import { QuestTemplateAddonController } from "./questTemplateAddon.controller";
import { QuestTemplateAddonGrpcController } from "./questTemplateAddon.grpc.controller";
import { QuestTemplateAddonResolver } from "./questTemplateAddon.resolver";

@Module({
  imports: [QuestTemplateAddonModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestTemplateAddonController, QuestTemplateAddonGrpcController],
  providers: [QuestTemplateAddonService, QuestTemplateAddonResolver],
  exports: [QuestTemplateAddonService],
})
export class QuestTemplateAddonModule {}
