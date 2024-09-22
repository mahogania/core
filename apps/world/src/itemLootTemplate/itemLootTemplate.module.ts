import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ItemLootTemplateModuleBase } from "./base/itemLootTemplate.module.base";
import { ItemLootTemplateService } from "./itemLootTemplate.service";
import { ItemLootTemplateController } from "./itemLootTemplate.controller";
import { ItemLootTemplateGrpcController } from "./itemLootTemplate.grpc.controller";
import { ItemLootTemplateResolver } from "./itemLootTemplate.resolver";

@Module({
  imports: [ItemLootTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [ItemLootTemplateController, ItemLootTemplateGrpcController],
  providers: [ItemLootTemplateService, ItemLootTemplateResolver],
  exports: [ItemLootTemplateService],
})
export class ItemLootTemplateModule {}
