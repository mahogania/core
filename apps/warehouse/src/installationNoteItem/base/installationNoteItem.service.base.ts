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
  InstallationNoteItem as PrismaInstallationNoteItem,
} from "@prisma/client";

export class InstallationNoteItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.InstallationNoteItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.installationNoteItem.count(args);
  }

  async installationNoteItems(
    args: Prisma.InstallationNoteItemFindManyArgs
  ): Promise<PrismaInstallationNoteItem[]> {
    return this.prisma.installationNoteItem.findMany(args);
  }
  async installationNoteItem(
    args: Prisma.InstallationNoteItemFindUniqueArgs
  ): Promise<PrismaInstallationNoteItem | null> {
    return this.prisma.installationNoteItem.findUnique(args);
  }
  async createInstallationNoteItem(
    args: Prisma.InstallationNoteItemCreateArgs
  ): Promise<PrismaInstallationNoteItem> {
    return this.prisma.installationNoteItem.create(args);
  }
  async updateInstallationNoteItem(
    args: Prisma.InstallationNoteItemUpdateArgs
  ): Promise<PrismaInstallationNoteItem> {
    return this.prisma.installationNoteItem.update(args);
  }
  async deleteInstallationNoteItem(
    args: Prisma.InstallationNoteItemDeleteArgs
  ): Promise<PrismaInstallationNoteItem> {
    return this.prisma.installationNoteItem.delete(args);
  }
}
