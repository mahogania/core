import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureFormationModuleBase } from "./base/creatureFormation.module.base";
import { CreatureFormationService } from "./creatureFormation.service";
import { CreatureFormationController } from "./creatureFormation.controller";
import { CreatureFormationGrpcController } from "./creatureFormation.grpc.controller";
import { CreatureFormationResolver } from "./creatureFormation.resolver";

@Module({
  imports: [CreatureFormationModuleBase, forwardRef(() => AuthModule)],
  controllers: [CreatureFormationController, CreatureFormationGrpcController],
  providers: [CreatureFormationService, CreatureFormationResolver],
  exports: [CreatureFormationService],
})
export class CreatureFormationModule {}
