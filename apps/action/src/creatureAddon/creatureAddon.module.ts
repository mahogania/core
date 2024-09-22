import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureAddonModuleBase } from "./base/creatureAddon.module.base";
import { CreatureAddonService } from "./creatureAddon.service";
import { CreatureAddonController } from "./creatureAddon.controller";
import { CreatureAddonGrpcController } from "./creatureAddon.grpc.controller";
import { CreatureAddonResolver } from "./creatureAddon.resolver";

@Module({
  imports: [CreatureAddonModuleBase, forwardRef(() => AuthModule)],
  controllers: [CreatureAddonController, CreatureAddonGrpcController],
  providers: [CreatureAddonService, CreatureAddonResolver],
  exports: [CreatureAddonService],
})
export class CreatureAddonModule {}
