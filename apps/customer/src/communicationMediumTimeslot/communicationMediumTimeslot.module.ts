import { Module } from "@nestjs/common";
import { CommunicationMediumTimeslotModuleBase } from "./base/communicationMediumTimeslot.module.base";
import { CommunicationMediumTimeslotService } from "./communicationMediumTimeslot.service";
import { CommunicationMediumTimeslotController } from "./communicationMediumTimeslot.controller";
import { CommunicationMediumTimeslotResolver } from "./communicationMediumTimeslot.resolver";

@Module({
  imports: [CommunicationMediumTimeslotModuleBase],
  controllers: [CommunicationMediumTimeslotController],
  providers: [
    CommunicationMediumTimeslotService,
    CommunicationMediumTimeslotResolver,
  ],
  exports: [CommunicationMediumTimeslotService],
})
export class CommunicationMediumTimeslotModule {}
