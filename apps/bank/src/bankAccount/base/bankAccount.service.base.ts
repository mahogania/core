/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, BankAccount as PrismaBankAccount } from "@prisma/client";

export class BankAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BankAccountCountArgs, "select">
  ): Promise<number> {
    return this.prisma.bankAccount.count(args);
  }

  async bankAccounts(
    args: Prisma.BankAccountFindManyArgs
  ): Promise<PrismaBankAccount[]> {
    return this.prisma.bankAccount.findMany(args);
  }
  async bankAccount(
    args: Prisma.BankAccountFindUniqueArgs
  ): Promise<PrismaBankAccount | null> {
    return this.prisma.bankAccount.findUnique(args);
  }
  async createBankAccount(
    args: Prisma.BankAccountCreateArgs
  ): Promise<PrismaBankAccount> {
    return this.prisma.bankAccount.create(args);
  }
  async updateBankAccount(
    args: Prisma.BankAccountUpdateArgs
  ): Promise<PrismaBankAccount> {
    return this.prisma.bankAccount.update(args);
  }
  async deleteBankAccount(
    args: Prisma.BankAccountDeleteArgs
  ): Promise<PrismaBankAccount> {
    return this.prisma.bankAccount.delete(args);
  }
}
