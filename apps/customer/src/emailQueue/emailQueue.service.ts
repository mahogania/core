import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmailQueueServiceBase } from "./base/emailQueue.service.base";

@Injectable()
export class EmailQueueService extends EmailQueueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
