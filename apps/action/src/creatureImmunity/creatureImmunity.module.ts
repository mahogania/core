import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureImmunityModuleBase } from "./base/creatureImmunity.module.base";
import { CreatureImmunityService } from "./creatureImmunity.service";
import { CreatureImmunityController } from "./creatureImmunity.controller";
import { CreatureImmunityGrpcController } from "./creatureImmunity.grpc.controller";
import { CreatureImmunityResolver } from "./creatureImmunity.resolver";

@Module({
  imports: [CreatureImmunityModuleBase, forwardRef(() => AuthModule)],
  controllers: [CreatureImmunityController, CreatureImmunityGrpcController],
  providers: [CreatureImmunityService, CreatureImmunityResolver],
  exports: [CreatureImmunityService],
})
export class CreatureImmunityModule {}
