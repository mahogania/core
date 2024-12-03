import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShipmentParcelTemplateServiceBase } from "./base/shipmentParcelTemplate.service.base";

@Injectable()
export class ShipmentParcelTemplateService extends ShipmentParcelTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
