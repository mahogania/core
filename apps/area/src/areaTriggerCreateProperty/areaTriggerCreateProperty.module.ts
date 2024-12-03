import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AreaTriggerCreatePropertyModuleBase } from "./base/areaTriggerCreateProperty.module.base";
import { AreaTriggerCreatePropertyService } from "./areaTriggerCreateProperty.service";
import { AreaTriggerCreatePropertyController } from "./areaTriggerCreateProperty.controller";
import { AreaTriggerCreatePropertyGrpcController } from "./areaTriggerCreateProperty.grpc.controller";
import { AreaTriggerCreatePropertyResolver } from "./areaTriggerCreateProperty.resolver";

@Module({
  imports: [AreaTriggerCreatePropertyModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    AreaTriggerCreatePropertyController,
    AreaTriggerCreatePropertyGrpcController,
  ],
  providers: [
    AreaTriggerCreatePropertyService,
    AreaTriggerCreatePropertyResolver,
  ],
  exports: [AreaTriggerCreatePropertyService],
})
export class AreaTriggerCreatePropertyModule {}
