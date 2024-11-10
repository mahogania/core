/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ContactPhone as PrismaContactPhone } from "@prisma/client";

export class ContactPhoneServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ContactPhoneCountArgs, "select">
  ): Promise<number> {
    return this.prisma.contactPhone.count(args);
  }

  async contactPhones(
    args: Prisma.ContactPhoneFindManyArgs
  ): Promise<PrismaContactPhone[]> {
    return this.prisma.contactPhone.findMany(args);
  }
  async contactPhone(
    args: Prisma.ContactPhoneFindUniqueArgs
  ): Promise<PrismaContactPhone | null> {
    return this.prisma.contactPhone.findUnique(args);
  }
  async createContactPhone(
    args: Prisma.ContactPhoneCreateArgs
  ): Promise<PrismaContactPhone> {
    return this.prisma.contactPhone.create(args);
  }
  async updateContactPhone(
    args: Prisma.ContactPhoneUpdateArgs
  ): Promise<PrismaContactPhone> {
    return this.prisma.contactPhone.update(args);
  }
  async deleteContactPhone(
    args: Prisma.ContactPhoneDeleteArgs
  ): Promise<PrismaContactPhone> {
    return this.prisma.contactPhone.delete(args);
  }
}