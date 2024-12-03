import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BankAccountSubtypeServiceBase } from "./base/bankAccountSubtype.service.base";

@Injectable()
export class BankAccountSubtypeService extends BankAccountSubtypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
