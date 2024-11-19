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
  ContractTemplate as PrismaContractTemplate,
} from "@prisma/client";

export class ContractTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ContractTemplateCountArgs, "select">
  ): Promise<number> {
    return this.prisma.contractTemplate.count(args);
  }

  async contractTemplates(
    args: Prisma.ContractTemplateFindManyArgs
  ): Promise<PrismaContractTemplate[]> {
    return this.prisma.contractTemplate.findMany(args);
  }
  async contractTemplate(
    args: Prisma.ContractTemplateFindUniqueArgs
  ): Promise<PrismaContractTemplate | null> {
    return this.prisma.contractTemplate.findUnique(args);
  }
  async createContractTemplate(
    args: Prisma.ContractTemplateCreateArgs
  ): Promise<PrismaContractTemplate> {
    return this.prisma.contractTemplate.create(args);
  }
  async updateContractTemplate(
    args: Prisma.ContractTemplateUpdateArgs
  ): Promise<PrismaContractTemplate> {
    return this.prisma.contractTemplate.update(args);
  }
  async deleteContractTemplate(
    args: Prisma.ContractTemplateDeleteArgs
  ): Promise<PrismaContractTemplate> {
    return this.prisma.contractTemplate.delete(args);
  }
}