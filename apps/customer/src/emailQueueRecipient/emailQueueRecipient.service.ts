import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmailQueueRecipientServiceBase } from "./base/emailQueueRecipient.service.base";

@Injectable()
export class EmailQueueRecipientService extends EmailQueueRecipientServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
