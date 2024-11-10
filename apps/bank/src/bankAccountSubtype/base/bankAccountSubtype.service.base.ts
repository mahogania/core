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
  BankAccountSubtype as PrismaBankAccountSubtype,
} from "@prisma/client";

export class BankAccountSubtypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BankAccountSubtypeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.bankAccountSubtype.count(args);
  }

  async bankAccountSubtypes(
    args: Prisma.BankAccountSubtypeFindManyArgs
  ): Promise<PrismaBankAccountSubtype[]> {
    return this.prisma.bankAccountSubtype.findMany(args);
  }
  async bankAccountSubtype(
    args: Prisma.BankAccountSubtypeFindUniqueArgs
  ): Promise<PrismaBankAccountSubtype | null> {
    return this.prisma.bankAccountSubtype.findUnique(args);
  }
  async createBankAccountSubtype(
    args: Prisma.BankAccountSubtypeCreateArgs
  ): Promise<PrismaBankAccountSubtype> {
    return this.prisma.bankAccountSubtype.create(args);
  }
  async updateBankAccountSubtype(
    args: Prisma.BankAccountSubtypeUpdateArgs
  ): Promise<PrismaBankAccountSubtype> {
    return this.prisma.bankAccountSubtype.update(args);
  }
  async deleteBankAccountSubtype(
    args: Prisma.BankAccountSubtypeDeleteArgs
  ): Promise<PrismaBankAccountSubtype> {
    return this.prisma.bankAccountSubtype.delete(args);
  }
}
