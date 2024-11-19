import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SkinningLootTemplateModuleBase } from "./base/skinningLootTemplate.module.base";
import { SkinningLootTemplateService } from "./skinningLootTemplate.service";
import { SkinningLootTemplateController } from "./skinningLootTemplate.controller";
import { SkinningLootTemplateGrpcController } from "./skinningLootTemplate.grpc.controller";
import { SkinningLootTemplateResolver } from "./skinningLootTemplate.resolver";

@Module({
  imports: [SkinningLootTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    SkinningLootTemplateController,
    SkinningLootTemplateGrpcController,
  ],
  providers: [SkinningLootTemplateService, SkinningLootTemplateResolver],
  exports: [SkinningLootTemplateService],
})
export class SkinningLootTemplateModule {}
