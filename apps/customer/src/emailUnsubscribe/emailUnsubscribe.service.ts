import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmailUnsubscribeServiceBase } from "./base/emailUnsubscribe.service.base";

@Injectable()
export class EmailUnsubscribeService extends EmailUnsubscribeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
