import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureTemplateResistanceModuleBase } from "./base/creatureTemplateResistance.module.base";
import { CreatureTemplateResistanceService } from "./creatureTemplateResistance.service";
import { CreatureTemplateResistanceController } from "./creatureTemplateResistance.controller";
import { CreatureTemplateResistanceGrpcController } from "./creatureTemplateResistance.grpc.controller";
import { CreatureTemplateResistanceResolver } from "./creatureTemplateResistance.resolver";

@Module({
  imports: [CreatureTemplateResistanceModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    CreatureTemplateResistanceController,
    CreatureTemplateResistanceGrpcController,
  ],
  providers: [
    CreatureTemplateResistanceService,
    CreatureTemplateResistanceResolver,
  ],
  exports: [CreatureTemplateResistanceService],
})
export class CreatureTemplateResistanceModule {}
