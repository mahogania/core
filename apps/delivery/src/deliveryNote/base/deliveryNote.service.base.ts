/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, DeliveryNote as PrismaDeliveryNote } from "@prisma/client";

export class DeliveryNoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DeliveryNoteCountArgs, "select">
  ): Promise<number> {
    return this.prisma.deliveryNote.count(args);
  }

  async deliveryNotes(
    args: Prisma.DeliveryNoteFindManyArgs
  ): Promise<PrismaDeliveryNote[]> {
    return this.prisma.deliveryNote.findMany(args);
  }
  async deliveryNote(
    args: Prisma.DeliveryNoteFindUniqueArgs
  ): Promise<PrismaDeliveryNote | null> {
    return this.prisma.deliveryNote.findUnique(args);
  }
  async createDeliveryNote(
    args: Prisma.DeliveryNoteCreateArgs
  ): Promise<PrismaDeliveryNote> {
    return this.prisma.deliveryNote.create(args);
  }
  async updateDeliveryNote(
    args: Prisma.DeliveryNoteUpdateArgs
  ): Promise<PrismaDeliveryNote> {
    return this.prisma.deliveryNote.update(args);
  }
  async deleteDeliveryNote(
    args: Prisma.DeliveryNoteDeleteArgs
  ): Promise<PrismaDeliveryNote> {
    return this.prisma.deliveryNote.delete(args);
  }
}
