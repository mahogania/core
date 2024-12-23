import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PoolModuleBase } from "./base/pool.module.base";
import { PoolService } from "./pool.service";
import { PoolController } from "./pool.controller";
import { PoolGrpcController } from "./pool.grpc.controller";
import { PoolResolver } from "./pool.resolver";

@Module({
  imports: [PoolModuleBase, forwardRef(() => AuthModule)],
  controllers: [PoolController, PoolGrpcController],
  providers: [PoolService, PoolResolver],
  exports: [PoolService],
})
export class PoolModule {}
