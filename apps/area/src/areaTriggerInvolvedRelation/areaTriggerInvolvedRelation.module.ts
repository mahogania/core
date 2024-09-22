import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AreaTriggerInvolvedRelationModuleBase } from "./base/areaTriggerInvolvedRelation.module.base";
import { AreaTriggerInvolvedRelationService } from "./areaTriggerInvolvedRelation.service";
import { AreaTriggerInvolvedRelationController } from "./areaTriggerInvolvedRelation.controller";
import { AreaTriggerInvolvedRelationGrpcController } from "./areaTriggerInvolvedRelation.grpc.controller";
import { AreaTriggerInvolvedRelationResolver } from "./areaTriggerInvolvedRelation.resolver";

@Module({
  imports: [
    AreaTriggerInvolvedRelationModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    AreaTriggerInvolvedRelationController,
    AreaTriggerInvolvedRelationGrpcController,
  ],
  providers: [
    AreaTriggerInvolvedRelationService,
    AreaTriggerInvolvedRelationResolver,
  ],
  exports: [AreaTriggerInvolvedRelationService],
})
export class AreaTriggerInvolvedRelationModule {}
