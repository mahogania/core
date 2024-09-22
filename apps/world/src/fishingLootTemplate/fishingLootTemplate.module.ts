import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FishingLootTemplateModuleBase } from "./base/fishingLootTemplate.module.base";
import { FishingLootTemplateService } from "./fishingLootTemplate.service";
import { FishingLootTemplateController } from "./fishingLootTemplate.controller";
import { FishingLootTemplateGrpcController } from "./fishingLootTemplate.grpc.controller";
import { FishingLootTemplateResolver } from "./fishingLootTemplate.resolver";

@Module({
  imports: [FishingLootTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    FishingLootTemplateController,
    FishingLootTemplateGrpcController,
  ],
  providers: [FishingLootTemplateService, FishingLootTemplateResolver],
  exports: [FishingLootTemplateService],
})
export class FishingLootTemplateModule {}
