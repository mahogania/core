import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BattlePetBreedsModuleBase } from "./base/battlePetBreeds.module.base";
import { BattlePetBreedsService } from "./battlePetBreeds.service";
import { BattlePetBreedsController } from "./battlePetBreeds.controller";
import { BattlePetBreedsGrpcController } from "./battlePetBreeds.grpc.controller";
import { BattlePetBreedsResolver } from "./battlePetBreeds.resolver";

@Module({
  imports: [BattlePetBreedsModuleBase, forwardRef(() => AuthModule)],
  controllers: [BattlePetBreedsController, BattlePetBreedsGrpcController],
  providers: [BattlePetBreedsService, BattlePetBreedsResolver],
  exports: [BattlePetBreedsService],
})
export class BattlePetBreedsModule {}
