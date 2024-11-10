import { Module } from "@nestjs/common";
import { CommunicationMediumModuleBase } from "./base/communicationMedium.module.base";
import { CommunicationMediumService } from "./communicationMedium.service";
import { CommunicationMediumController } from "./communicationMedium.controller";
import { CommunicationMediumResolver } from "./communicationMedium.resolver";

@Module({
  imports: [CommunicationMediumModuleBase],
  controllers: [CommunicationMediumController],
  providers: [CommunicationMediumService, CommunicationMediumResolver],
  exports: [CommunicationMediumService],
})
export class CommunicationMediumModule {}
