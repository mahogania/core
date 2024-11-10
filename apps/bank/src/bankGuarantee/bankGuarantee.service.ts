import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BankGuaranteeServiceBase } from "./base/bankGuarantee.service.base";

@Injectable()
export class BankGuaranteeService extends BankGuaranteeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
