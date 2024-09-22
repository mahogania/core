import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccessRequirementModuleBase } from "./base/accessRequirement.module.base";
import { AccessRequirementService } from "./accessRequirement.service";
import { AccessRequirementController } from "./accessRequirement.controller";
import { AccessRequirementGrpcController } from "./accessRequirement.grpc.controller";
import { AccessRequirementResolver } from "./accessRequirement.resolver";

@Module({
  imports: [AccessRequirementModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccessRequirementController, AccessRequirementGrpcController],
  providers: [AccessRequirementService, AccessRequirementResolver],
  exports: [AccessRequirementService],
})
export class AccessRequirementModule {}
