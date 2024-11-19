import { Module } from "@nestjs/common";
import { ConstraintModuleBase } from "./base/constraint.module.base";
import { ConstraintService } from "./constraint.service";
import { ConstraintController } from "./constraint.controller";
import { ConstraintGrpcController } from "./constraint.grpc.controller";
import { ConstraintResolver } from "./constraint.resolver";

@Module({
  imports: [ConstraintModuleBase],
  controllers: [ConstraintController, ConstraintGrpcController],
  providers: [ConstraintService, ConstraintResolver],
  exports: [ConstraintService],
})
export class ConstraintModule {}
