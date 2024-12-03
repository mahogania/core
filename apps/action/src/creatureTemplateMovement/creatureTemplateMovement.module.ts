import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureTemplateMovementModuleBase } from "./base/creatureTemplateMovement.module.base";
import { CreatureTemplateMovementService } from "./creatureTemplateMovement.service";
import { CreatureTemplateMovementController } from "./creatureTemplateMovement.controller";
import { CreatureTemplateMovementGrpcController } from "./creatureTemplateMovement.grpc.controller";
import { CreatureTemplateMovementResolver } from "./creatureTemplateMovement.resolver";

@Module({
  imports: [CreatureTemplateMovementModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    CreatureTemplateMovementController,
    CreatureTemplateMovementGrpcController,
  ],
  providers: [
    CreatureTemplateMovementService,
    CreatureTemplateMovementResolver,
  ],
  exports: [CreatureTemplateMovementService],
})
export class CreatureTemplateMovementModule {}
