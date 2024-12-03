import { Module } from "@nestjs/common";
import { OptionModuleBase } from "./base/option.module.base";
import { OptionService } from "./option.service";
import { OptionController } from "./option.controller";
import { OptionGrpcController } from "./option.grpc.controller";
import { OptionResolver } from "./option.resolver";

@Module({
  imports: [OptionModuleBase],
  controllers: [OptionController, OptionGrpcController],
  providers: [OptionService, OptionResolver],
  exports: [OptionService],
})
export class OptionModule {}
