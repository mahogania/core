import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmailDigestServiceBase } from "./base/emailDigest.service.base";

@Injectable()
export class EmailDigestService extends EmailDigestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
