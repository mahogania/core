import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PoolTemplateModuleBase } from "./base/poolTemplate.module.base";
import { PoolTemplateService } from "./poolTemplate.service";
import { PoolTemplateController } from "./poolTemplate.controller";
import { PoolTemplateGrpcController } from "./poolTemplate.grpc.controller";
import { PoolTemplateResolver } from "./poolTemplate.resolver";

@Module({
  imports: [PoolTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [PoolTemplateController, PoolTemplateGrpcController],
  providers: [PoolTemplateService, PoolTemplateResolver],
  exports: [PoolTemplateService],
})
export class PoolTemplateModule {}
