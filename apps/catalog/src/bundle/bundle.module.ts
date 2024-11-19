import { Module } from "@nestjs/common";
import { BundleModuleBase } from "./base/bundle.module.base";
import { BundleService } from "./bundle.service";
import { BundleController } from "./bundle.controller";
import { BundleGrpcController } from "./bundle.grpc.controller";
import { BundleResolver } from "./bundle.resolver";

@Module({
  imports: [BundleModuleBase],
  controllers: [BundleController, BundleGrpcController],
  providers: [BundleService, BundleResolver],
  exports: [BundleService],
})
export class BundleModule {}
