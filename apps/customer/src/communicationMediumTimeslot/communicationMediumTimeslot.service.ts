import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommunicationMediumTimeslotServiceBase } from "./base/communicationMediumTimeslot.service.base";

@Injectable()
export class CommunicationMediumTimeslotService extends CommunicationMediumTimeslotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
