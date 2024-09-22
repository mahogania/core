import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PetLevelstatsModuleBase } from "./base/petLevelstats.module.base";
import { PetLevelstatsService } from "./petLevelstats.service";
import { PetLevelstatsController } from "./petLevelstats.controller";
import { PetLevelstatsGrpcController } from "./petLevelstats.grpc.controller";
import { PetLevelstatsResolver } from "./petLevelstats.resolver";

@Module({
  imports: [PetLevelstatsModuleBase, forwardRef(() => AuthModule)],
  controllers: [PetLevelstatsController, PetLevelstatsGrpcController],
  providers: [PetLevelstatsService, PetLevelstatsResolver],
  exports: [PetLevelstatsService],
})
export class PetLevelstatsModule {}
