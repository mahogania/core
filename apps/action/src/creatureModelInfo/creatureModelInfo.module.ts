import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureModelInfoModuleBase } from "./base/creatureModelInfo.module.base";
import { CreatureModelInfoService } from "./creatureModelInfo.service";
import { CreatureModelInfoController } from "./creatureModelInfo.controller";
import { CreatureModelInfoGrpcController } from "./creatureModelInfo.grpc.controller";
import { CreatureModelInfoResolver } from "./creatureModelInfo.resolver";

@Module({
  imports: [CreatureModelInfoModuleBase, forwardRef(() => AuthModule)],
  controllers: [CreatureModelInfoController, CreatureModelInfoGrpcController],
  providers: [CreatureModelInfoService, CreatureModelInfoResolver],
  exports: [CreatureModelInfoService],
})
export class CreatureModelInfoModule {}
