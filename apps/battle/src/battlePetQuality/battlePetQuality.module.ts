import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BattlePetQualityModuleBase } from "./base/battlePetQuality.module.base";
import { BattlePetQualityService } from "./battlePetQuality.service";
import { BattlePetQualityController } from "./battlePetQuality.controller";
import { BattlePetQualityGrpcController } from "./battlePetQuality.grpc.controller";
import { BattlePetQualityResolver } from "./battlePetQuality.resolver";

@Module({
  imports: [BattlePetQualityModuleBase, forwardRef(() => AuthModule)],
  controllers: [BattlePetQualityController, BattlePetQualityGrpcController],
  providers: [BattlePetQualityService, BattlePetQualityResolver],
  exports: [BattlePetQualityService],
})
export class BattlePetQualityModule {}
