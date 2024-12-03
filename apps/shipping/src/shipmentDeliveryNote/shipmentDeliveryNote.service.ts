import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShipmentDeliveryNoteServiceBase } from "./base/shipmentDeliveryNote.service.base";

@Injectable()
export class ShipmentDeliveryNoteService extends ShipmentDeliveryNoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
