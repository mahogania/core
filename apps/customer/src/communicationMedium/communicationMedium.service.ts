import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommunicationMediumServiceBase } from "./base/communicationMedium.service.base";

@Injectable()
export class CommunicationMediumService extends CommunicationMediumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
