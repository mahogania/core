import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PhaseAreaModuleBase } from "./base/phaseArea.module.base";
import { PhaseAreaService } from "./phaseArea.service";
import { PhaseAreaController } from "./phaseArea.controller";
import { PhaseAreaGrpcController } from "./phaseArea.grpc.controller";
import { PhaseAreaResolver } from "./phaseArea.resolver";

@Module({
  imports: [PhaseAreaModuleBase, forwardRef(() => AuthModule)],
  controllers: [PhaseAreaController, PhaseAreaGrpcController],
  providers: [PhaseAreaService, PhaseAreaResolver],
  exports: [PhaseAreaService],
})
export class PhaseAreaModule {}
