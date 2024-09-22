import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureFormationsModuleBase } from "./base/creatureFormations.module.base";
import { CreatureFormationsService } from "./creatureFormations.service";
import { CreatureFormationsController } from "./creatureFormations.controller";
import { CreatureFormationsGrpcController } from "./creatureFormations.grpc.controller";
import { CreatureFormationsResolver } from "./creatureFormations.resolver";

@Module({
  imports: [CreatureFormationsModuleBase, forwardRef(() => AuthModule)],
  controllers: [CreatureFormationsController, CreatureFormationsGrpcController],
  providers: [CreatureFormationsService, CreatureFormationsResolver],
  exports: [CreatureFormationsService],
})
export class CreatureFormationsModule {}
