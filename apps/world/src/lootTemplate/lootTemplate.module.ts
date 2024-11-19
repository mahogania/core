import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LootTemplateModuleBase } from "./base/lootTemplate.module.base";
import { LootTemplateService } from "./lootTemplate.service";
import { LootTemplateController } from "./lootTemplate.controller";
import { LootTemplateGrpcController } from "./lootTemplate.grpc.controller";
import { LootTemplateResolver } from "./lootTemplate.resolver";

@Module({
  imports: [LootTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [LootTemplateController, LootTemplateGrpcController],
  providers: [LootTemplateService, LootTemplateResolver],
  exports: [LootTemplateService],
})
export class LootTemplateModule {}
