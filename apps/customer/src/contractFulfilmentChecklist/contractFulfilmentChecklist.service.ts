import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContractFulfilmentChecklistServiceBase } from "./base/contractFulfilmentChecklist.service.base";

@Injectable()
export class ContractFulfilmentChecklistService extends ContractFulfilmentChecklistServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
