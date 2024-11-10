import { Module } from "@nestjs/common";
import { CommunicationLinkModuleBase } from "./base/communicationLink.module.base";
import { CommunicationLinkService } from "./communicationLink.service";
import { CommunicationLinkController } from "./communicationLink.controller";
import { CommunicationLinkResolver } from "./communicationLink.resolver";

@Module({
  imports: [CommunicationLinkModuleBase],
  controllers: [CommunicationLinkController],
  providers: [CommunicationLinkService, CommunicationLinkResolver],
  exports: [CommunicationLinkService],
})
export class CommunicationLinkModule {}
