import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PhaseNameModuleBase } from "./base/phaseName.module.base";
import { PhaseNameService } from "./phaseName.service";
import { PhaseNameController } from "./phaseName.controller";
import { PhaseNameGrpcController } from "./phaseName.grpc.controller";
import { PhaseNameResolver } from "./phaseName.resolver";

@Module({
  imports: [PhaseNameModuleBase, forwardRef(() => AuthModule)],
  controllers: [PhaseNameController, PhaseNameGrpcController],
  providers: [PhaseNameService, PhaseNameResolver],
  exports: [PhaseNameService],
})
export class PhaseNameModule {}
