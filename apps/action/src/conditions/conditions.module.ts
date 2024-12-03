import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ConditionsModuleBase } from "./base/conditions.module.base";
import { ConditionsService } from "./conditions.service";
import { ConditionsController } from "./conditions.controller";
import { ConditionsGrpcController } from "./conditions.grpc.controller";
import { ConditionsResolver } from "./conditions.resolver";

@Module({
  imports: [ConditionsModuleBase, forwardRef(() => AuthModule)],
  controllers: [ConditionsController, ConditionsGrpcController],
  providers: [ConditionsService, ConditionsResolver],
  exports: [ConditionsService],
})
export class ConditionsModule {}
