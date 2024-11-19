import { Module } from "@nestjs/common";
import { ConfigurationModuleBase } from "./base/configuration.module.base";
import { ConfigurationService } from "./configuration.service";
import { ConfigurationController } from "./configuration.controller";
import { ConfigurationGrpcController } from "./configuration.grpc.controller";
import { ConfigurationResolver } from "./configuration.resolver";

@Module({
  imports: [ConfigurationModuleBase],
  controllers: [ConfigurationController, ConfigurationGrpcController],
  providers: [ConfigurationService, ConfigurationResolver],
  exports: [ConfigurationService],
})
export class ConfigurationModule {}
