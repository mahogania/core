import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmailAccountServiceBase } from "./base/emailAccount.service.base";

@Injectable()
export class EmailAccountService extends EmailAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
