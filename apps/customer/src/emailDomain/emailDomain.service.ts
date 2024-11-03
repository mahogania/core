import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmailDomainServiceBase } from "./base/emailDomain.service.base";

@Injectable()
export class EmailDomainService extends EmailDomainServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
