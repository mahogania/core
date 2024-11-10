import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContractTemplateFulfilmentTermsServiceBase } from "./base/contractTemplateFulfilmentTerms.service.base";

@Injectable()
export class ContractTemplateFulfilmentTermsService extends ContractTemplateFulfilmentTermsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
