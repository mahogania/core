import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ScenariosModuleBase } from "./base/scenarios.module.base";
import { ScenariosService } from "./scenarios.service";
import { ScenariosController } from "./scenarios.controller";
import { ScenariosGrpcController } from "./scenarios.grpc.controller";
import { ScenariosResolver } from "./scenarios.resolver";

@Module({
  imports: [ScenariosModuleBase, forwardRef(() => AuthModule)],
  controllers: [ScenariosController, ScenariosGrpcController],
  providers: [ScenariosService, ScenariosResolver],
  exports: [ScenariosService],
})
export class ScenariosModule {}
