import { Module } from "@nestjs/common";
import { ClientScriptModuleBase } from "./base/clientScript.module.base";
import { ClientScriptService } from "./clientScript.service";
import { ClientScriptController } from "./clientScript.controller";
import { ClientScriptResolver } from "./clientScript.resolver";

@Module({
  imports: [ClientScriptModuleBase],
  controllers: [ClientScriptController],
  providers: [ClientScriptService, ClientScriptResolver],
  exports: [ClientScriptService],
})
export class ClientScriptModule {}
