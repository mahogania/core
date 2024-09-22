import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestTemplateLocaleModuleBase } from "./base/questTemplateLocale.module.base";
import { QuestTemplateLocaleService } from "./questTemplateLocale.service";
import { QuestTemplateLocaleController } from "./questTemplateLocale.controller";
import { QuestTemplateLocaleGrpcController } from "./questTemplateLocale.grpc.controller";
import { QuestTemplateLocaleResolver } from "./questTemplateLocale.resolver";

@Module({
  imports: [QuestTemplateLocaleModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    QuestTemplateLocaleController,
    QuestTemplateLocaleGrpcController,
  ],
  providers: [QuestTemplateLocaleService, QuestTemplateLocaleResolver],
  exports: [QuestTemplateLocaleService],
})
export class QuestTemplateLocaleModule {}
