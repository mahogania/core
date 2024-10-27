import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PortalModuleBase } from "./base/portal.module.base";
import { PortalService } from "./portal.service";
import { PortalController } from "./portal.controller";
import { PortalGrpcController } from "./portal.grpc.controller";
import { PortalResolver } from "./portal.resolver";

@Module({
  imports: [PortalModuleBase, forwardRef(() => AuthModule)],
  controllers: [PortalController, PortalGrpcController],
  providers: [PortalService, PortalResolver],
  exports: [PortalService],
})
export class PortalModule {}
