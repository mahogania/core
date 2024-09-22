import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DisenchantLootTemplateModuleBase } from "./base/disenchantLootTemplate.module.base";
import { DisenchantLootTemplateService } from "./disenchantLootTemplate.service";
import { DisenchantLootTemplateController } from "./disenchantLootTemplate.controller";
import { DisenchantLootTemplateGrpcController } from "./disenchantLootTemplate.grpc.controller";
import { DisenchantLootTemplateResolver } from "./disenchantLootTemplate.resolver";

@Module({
  imports: [DisenchantLootTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    DisenchantLootTemplateController,
    DisenchantLootTemplateGrpcController,
  ],
  providers: [DisenchantLootTemplateService, DisenchantLootTemplateResolver],
  exports: [DisenchantLootTemplateService],
})
export class DisenchantLootTemplateModule {}
