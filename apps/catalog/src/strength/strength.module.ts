import { Module } from "@nestjs/common";
import { StrengthModuleBase } from "./base/strength.module.base";
import { StrengthService } from "./strength.service";
import { StrengthController } from "./strength.controller";
import { StrengthGrpcController } from "./strength.grpc.controller";
import { StrengthResolver } from "./strength.resolver";

@Module({
  imports: [StrengthModuleBase],
  controllers: [StrengthController, StrengthGrpcController],
  providers: [StrengthService, StrengthResolver],
  exports: [StrengthService],
})
export class StrengthModule {}
