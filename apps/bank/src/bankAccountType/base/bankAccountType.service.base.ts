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
  BankAccountType as PrismaBankAccountType,
} from "@prisma/client";

export class BankAccountTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BankAccountTypeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.bankAccountType.count(args);
  }

  async bankAccountTypes(
    args: Prisma.BankAccountTypeFindManyArgs
  ): Promise<PrismaBankAccountType[]> {
    return this.prisma.bankAccountType.findMany(args);
  }
  async bankAccountType(
    args: Prisma.BankAccountTypeFindUniqueArgs
  ): Promise<PrismaBankAccountType | null> {
    return this.prisma.bankAccountType.findUnique(args);
  }
  async createBankAccountType(
    args: Prisma.BankAccountTypeCreateArgs
  ): Promise<PrismaBankAccountType> {
    return this.prisma.bankAccountType.create(args);
  }
  async updateBankAccountType(
    args: Prisma.BankAccountTypeUpdateArgs
  ): Promise<PrismaBankAccountType> {
    return this.prisma.bankAccountType.update(args);
  }
  async deleteBankAccountType(
    args: Prisma.BankAccountTypeDeleteArgs
  ): Promise<PrismaBankAccountType> {
    return this.prisma.bankAccountType.delete(args);
  }
}
