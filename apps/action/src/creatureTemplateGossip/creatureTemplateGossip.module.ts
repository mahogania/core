import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureTemplateGossipModuleBase } from "./base/creatureTemplateGossip.module.base";
import { CreatureTemplateGossipService } from "./creatureTemplateGossip.service";
import { CreatureTemplateGossipController } from "./creatureTemplateGossip.controller";
import { CreatureTemplateGossipGrpcController } from "./creatureTemplateGossip.grpc.controller";
import { CreatureTemplateGossipResolver } from "./creatureTemplateGossip.resolver";

@Module({
  imports: [CreatureTemplateGossipModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    CreatureTemplateGossipController,
    CreatureTemplateGossipGrpcController,
  ],
  providers: [CreatureTemplateGossipService, CreatureTemplateGossipResolver],
  exports: [CreatureTemplateGossipService],
})
export class CreatureTemplateGossipModule {}
