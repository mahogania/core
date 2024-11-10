import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommunicationLinkServiceBase } from "./base/communicationLink.service.base";

@Injectable()
export class CommunicationLinkService extends CommunicationLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
