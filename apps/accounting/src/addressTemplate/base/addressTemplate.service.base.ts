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
  AddressTemplate as PrismaAddressTemplate,
} from "@prisma/client";

export class AddressTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AddressTemplateCountArgs, "select">
  ): Promise<number> {
    return this.prisma.addressTemplate.count(args);
  }

  async addressTemplates(
    args: Prisma.AddressTemplateFindManyArgs
  ): Promise<PrismaAddressTemplate[]> {
    return this.prisma.addressTemplate.findMany(args);
  }
  async addressTemplate(
    args: Prisma.AddressTemplateFindUniqueArgs
  ): Promise<PrismaAddressTemplate | null> {
    return this.prisma.addressTemplate.findUnique(args);
  }
  async createAddressTemplate(
    args: Prisma.AddressTemplateCreateArgs
  ): Promise<PrismaAddressTemplate> {
    return this.prisma.addressTemplate.create(args);
  }
  async updateAddressTemplate(
    args: Prisma.AddressTemplateUpdateArgs
  ): Promise<PrismaAddressTemplate> {
    return this.prisma.addressTemplate.update(args);
  }
  async deleteAddressTemplate(
    args: Prisma.AddressTemplateDeleteArgs
  ): Promise<PrismaAddressTemplate> {
    return this.prisma.addressTemplate.delete(args);
  }
}
