import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BankAccountTypeServiceBase } from "./base/bankAccountType.service.base";

@Injectable()
export class BankAccountTypeService extends BankAccountTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
