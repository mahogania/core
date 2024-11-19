import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeliveryNoteItemServiceBase } from "./base/deliveryNoteItem.service.base";

@Injectable()
export class DeliveryNoteItemService extends DeliveryNoteItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
