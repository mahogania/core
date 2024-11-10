import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureTemplateAddonModuleBase } from "./base/creatureTemplateAddon.module.base";
import { CreatureTemplateAddonService } from "./creatureTemplateAddon.service";
import { CreatureTemplateAddonController } from "./creatureTemplateAddon.controller";
import { CreatureTemplateAddonGrpcController } from "./creatureTemplateAddon.grpc.controller";
import { CreatureTemplateAddonResolver } from "./creatureTemplateAddon.resolver";

@Module({
  imports: [CreatureTemplateAddonModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    CreatureTemplateAddonController,
    CreatureTemplateAddonGrpcController,
  ],
  providers: [CreatureTemplateAddonService, CreatureTemplateAddonResolver],
  exports: [CreatureTemplateAddonService],
})
export class CreatureTemplateAddonModule {}
