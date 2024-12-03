import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BankTransactionMappingServiceBase } from "./base/bankTransactionMapping.service.base";

@Injectable()
export class BankTransactionMappingService extends BankTransactionMappingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
