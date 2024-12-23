/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  ContractTemplateFulfilmentTerms as PrismaContractTemplateFulfilmentTerms,
} from "@prisma/client";

export class ContractTemplateFulfilmentTermsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ContractTemplateFulfilmentTermsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.contractTemplateFulfilmentTerms.count(args);
  }

  async contractTemplateFulfilmentTermsItems(
    args: Prisma.ContractTemplateFulfilmentTermsFindManyArgs
  ): Promise<PrismaContractTemplateFulfilmentTerms[]> {
    return this.prisma.contractTemplateFulfilmentTerms.findMany(args);
  }
  async contractTemplateFulfilmentTerms(
    args: Prisma.ContractTemplateFulfilmentTermsFindUniqueArgs
  ): Promise<PrismaContractTemplateFulfilmentTerms | null> {
    return this.prisma.contractTemplateFulfilmentTerms.findUnique(args);
  }
  async createContractTemplateFulfilmentTerms(
    args: Prisma.ContractTemplateFulfilmentTermsCreateArgs
  ): Promise<PrismaContractTemplateFulfilmentTerms> {
    return this.prisma.contractTemplateFulfilmentTerms.create(args);
  }
  async updateContractTemplateFulfilmentTerms(
    args: Prisma.ContractTemplateFulfilmentTermsUpdateArgs
  ): Promise<PrismaContractTemplateFulfilmentTerms> {
    return this.prisma.contractTemplateFulfilmentTerms.update(args);
  }
  async deleteContractTemplateFulfilmentTerms(
    args: Prisma.ContractTemplateFulfilmentTermsDeleteArgs
  ): Promise<PrismaContractTemplateFulfilmentTerms> {
    return this.prisma.contractTemplateFulfilmentTerms.delete(args);
  }
}
