import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureLootModuleBase } from "./base/creatureLoot.module.base";
import { CreatureLootService } from "./creatureLoot.service";
import { CreatureLootController } from "./creatureLoot.controller";
import { CreatureLootGrpcController } from "./creatureLoot.grpc.controller";
import { CreatureLootResolver } from "./creatureLoot.resolver";

@Module({
  imports: [CreatureLootModuleBase, forwardRef(() => AuthModule)],
  controllers: [CreatureLootController, CreatureLootGrpcController],
  providers: [CreatureLootService, CreatureLootResolver],
  exports: [CreatureLootService],
})
export class CreatureLootModule {}
