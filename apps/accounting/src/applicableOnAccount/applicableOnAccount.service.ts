import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicableOnAccountServiceBase } from "./base/applicableOnAccount.service.base";

@Injectable()
export class ApplicableOnAccountService extends ApplicableOnAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
