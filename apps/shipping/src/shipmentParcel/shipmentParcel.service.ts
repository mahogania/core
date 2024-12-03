import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShipmentParcelServiceBase } from "./base/shipmentParcel.service.base";

@Injectable()
export class ShipmentParcelService extends ShipmentParcelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
