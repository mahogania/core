import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AreaModuleBase } from "./base/area.module.base";
import { AreaService } from "./area.service";
import { AreaController } from "./area.controller";
import { AreaGrpcController } from "./area.grpc.controller";
import { AreaResolver } from "./area.resolver";

@Module({
  imports: [AreaModuleBase, forwardRef(() => AuthModule)],
  controllers: [AreaController, AreaGrpcController],
  providers: [AreaService, AreaResolver],
  exports: [AreaService],
})
export class AreaModule {}
