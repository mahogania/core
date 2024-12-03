import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmailDigestRecipientServiceBase } from "./base/emailDigestRecipient.service.base";

@Injectable()
export class EmailDigestRecipientService extends EmailDigestRecipientServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
