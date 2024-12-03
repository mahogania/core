import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureSummonedDataModuleBase } from "./base/creatureSummonedData.module.base";
import { CreatureSummonedDataService } from "./creatureSummonedData.service";
import { CreatureSummonedDataController } from "./creatureSummonedData.controller";
import { CreatureSummonedDataGrpcController } from "./creatureSummonedData.grpc.controller";
import { CreatureSummonedDataResolver } from "./creatureSummonedData.resolver";

@Module({
  imports: [CreatureSummonedDataModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    CreatureSummonedDataController,
    CreatureSummonedDataGrpcController,
  ],
  providers: [CreatureSummonedDataService, CreatureSummonedDataResolver],
  exports: [CreatureSummonedDataService],
})
export class CreatureSummonedDataModule {}
