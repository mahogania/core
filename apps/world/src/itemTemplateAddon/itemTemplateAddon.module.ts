import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ItemTemplateAddonModuleBase } from "./base/itemTemplateAddon.module.base";
import { ItemTemplateAddonService } from "./itemTemplateAddon.service";
import { ItemTemplateAddonController } from "./itemTemplateAddon.controller";
import { ItemTemplateAddonGrpcController } from "./itemTemplateAddon.grpc.controller";
import { ItemTemplateAddonResolver } from "./itemTemplateAddon.resolver";

@Module({
  imports: [ItemTemplateAddonModuleBase, forwardRef(() => AuthModule)],
  controllers: [ItemTemplateAddonController, ItemTemplateAddonGrpcController],
  providers: [ItemTemplateAddonService, ItemTemplateAddonResolver],
  exports: [ItemTemplateAddonService],
})
export class ItemTemplateAddonModule {}
