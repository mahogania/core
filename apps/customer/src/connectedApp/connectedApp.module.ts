import { Module } from "@nestjs/common";
import { ConnectedAppModuleBase } from "./base/connectedApp.module.base";
import { ConnectedAppService } from "./connectedApp.service";
import { ConnectedAppController } from "./connectedApp.controller";
import { ConnectedAppResolver } from "./connectedApp.resolver";

@Module({
  imports: [ConnectedAppModuleBase],
  controllers: [ConnectedAppController],
  providers: [ConnectedAppService, ConnectedAppResolver],
  exports: [ConnectedAppService],
})
export class ConnectedAppModule {}
