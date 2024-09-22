import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProspectingLootTemplateModuleBase } from "./base/prospectingLootTemplate.module.base";
import { ProspectingLootTemplateService } from "./prospectingLootTemplate.service";
import { ProspectingLootTemplateController } from "./prospectingLootTemplate.controller";
import { ProspectingLootTemplateGrpcController } from "./prospectingLootTemplate.grpc.controller";
import { ProspectingLootTemplateResolver } from "./prospectingLootTemplate.resolver";

@Module({
  imports: [ProspectingLootTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    ProspectingLootTemplateController,
    ProspectingLootTemplateGrpcController,
  ],
  providers: [ProspectingLootTemplateService, ProspectingLootTemplateResolver],
  exports: [ProspectingLootTemplateService],
})
export class ProspectingLootTemplateModule {}
