import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PetNameGenerationModuleBase } from "./base/petNameGeneration.module.base";
import { PetNameGenerationService } from "./petNameGeneration.service";
import { PetNameGenerationController } from "./petNameGeneration.controller";
import { PetNameGenerationGrpcController } from "./petNameGeneration.grpc.controller";
import { PetNameGenerationResolver } from "./petNameGeneration.resolver";

@Module({
  imports: [PetNameGenerationModuleBase, forwardRef(() => AuthModule)],
  controllers: [PetNameGenerationController, PetNameGenerationGrpcController],
  providers: [PetNameGenerationService, PetNameGenerationResolver],
  exports: [PetNameGenerationService],
})
export class PetNameGenerationModule {}
