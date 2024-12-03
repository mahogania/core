import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MailLootTemplateModuleBase } from "./base/mailLootTemplate.module.base";
import { MailLootTemplateService } from "./mailLootTemplate.service";
import { MailLootTemplateController } from "./mailLootTemplate.controller";
import { MailLootTemplateGrpcController } from "./mailLootTemplate.grpc.controller";
import { MailLootTemplateResolver } from "./mailLootTemplate.resolver";

@Module({
  imports: [MailLootTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [MailLootTemplateController, MailLootTemplateGrpcController],
  providers: [MailLootTemplateService, MailLootTemplateResolver],
  exports: [MailLootTemplateService],
})
export class MailLootTemplateModule {}
