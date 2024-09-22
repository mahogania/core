import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AreaTriggerCreatePropertiesOrbitModuleBase } from "./base/areaTriggerCreatePropertiesOrbit.module.base";
import { AreaTriggerCreatePropertiesOrbitService } from "./areaTriggerCreatePropertiesOrbit.service";
import { AreaTriggerCreatePropertiesOrbitController } from "./areaTriggerCreatePropertiesOrbit.controller";
import { AreaTriggerCreatePropertiesOrbitGrpcController } from "./areaTriggerCreatePropertiesOrbit.grpc.controller";
import { AreaTriggerCreatePropertiesOrbitResolver } from "./areaTriggerCreatePropertiesOrbit.resolver";

@Module({
  imports: [
    AreaTriggerCreatePropertiesOrbitModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    AreaTriggerCreatePropertiesOrbitController,
    AreaTriggerCreatePropertiesOrbitGrpcController,
  ],
  providers: [
    AreaTriggerCreatePropertiesOrbitService,
    AreaTriggerCreatePropertiesOrbitResolver,
  ],
  exports: [AreaTriggerCreatePropertiesOrbitService],
})
export class AreaTriggerCreatePropertiesOrbitModule {}
