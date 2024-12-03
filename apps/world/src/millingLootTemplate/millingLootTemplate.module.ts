import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MillingLootTemplateModuleBase } from "./base/millingLootTemplate.module.base";
import { MillingLootTemplateService } from "./millingLootTemplate.service";
import { MillingLootTemplateController } from "./millingLootTemplate.controller";
import { MillingLootTemplateGrpcController } from "./millingLootTemplate.grpc.controller";
import { MillingLootTemplateResolver } from "./millingLootTemplate.resolver";

@Module({
  imports: [MillingLootTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    MillingLootTemplateController,
    MillingLootTemplateGrpcController,
  ],
  providers: [MillingLootTemplateService, MillingLootTemplateResolver],
  exports: [MillingLootTemplateService],
})
export class MillingLootTemplateModule {}
