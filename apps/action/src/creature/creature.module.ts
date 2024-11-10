import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureModuleBase } from "./base/creature.module.base";
import { CreatureService } from "./creature.service";
import { CreatureController } from "./creature.controller";
import { CreatureGrpcController } from "./creature.grpc.controller";
import { CreatureResolver } from "./creature.resolver";

@Module({
  imports: [CreatureModuleBase, forwardRef(() => AuthModule)],
  controllers: [CreatureController, CreatureGrpcController],
  providers: [CreatureService, CreatureResolver],
  exports: [CreatureService],
})
export class CreatureModule {}
