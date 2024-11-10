import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { JumpChargeParamsModuleBase } from "./base/jumpChargeParams.module.base";
import { JumpChargeParamsService } from "./jumpChargeParams.service";
import { JumpChargeParamsController } from "./jumpChargeParams.controller";
import { JumpChargeParamsGrpcController } from "./jumpChargeParams.grpc.controller";
import { JumpChargeParamsResolver } from "./jumpChargeParams.resolver";

@Module({
  imports: [JumpChargeParamsModuleBase, forwardRef(() => AuthModule)],
  controllers: [JumpChargeParamsController, JumpChargeParamsGrpcController],
  providers: [JumpChargeParamsService, JumpChargeParamsResolver],
  exports: [JumpChargeParamsService],
})
export class JumpChargeParamsModule {}
