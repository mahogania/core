import { Module } from "@nestjs/common";
import { IndustryModuleBase } from "./base/industry.module.base";
import { IndustryService } from "./industry.service";
import { IndustryController } from "./industry.controller";
import { IndustryGrpcController } from "./industry.grpc.controller";
import { IndustryResolver } from "./industry.resolver";

@Module({
  imports: [IndustryModuleBase],
  controllers: [IndustryController, IndustryGrpcController],
  providers: [IndustryService, IndustryResolver],
  exports: [IndustryService],
})
export class IndustryModule {}
