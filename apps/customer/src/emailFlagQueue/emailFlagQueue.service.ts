import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmailFlagQueueServiceBase } from "./base/emailFlagQueue.service.base";

@Injectable()
export class EmailFlagQueueService extends EmailFlagQueueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
