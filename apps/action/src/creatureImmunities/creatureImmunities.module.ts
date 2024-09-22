import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureImmunitiesModuleBase } from "./base/creatureImmunities.module.base";
import { CreatureImmunitiesService } from "./creatureImmunities.service";
import { CreatureImmunitiesController } from "./creatureImmunities.controller";
import { CreatureImmunitiesGrpcController } from "./creatureImmunities.grpc.controller";
import { CreatureImmunitiesResolver } from "./creatureImmunities.resolver";

@Module({
  imports: [CreatureImmunitiesModuleBase, forwardRef(() => AuthModule)],
  controllers: [CreatureImmunitiesController, CreatureImmunitiesGrpcController],
  providers: [CreatureImmunitiesService, CreatureImmunitiesResolver],
  exports: [CreatureImmunitiesService],
})
export class CreatureImmunitiesModule {}
