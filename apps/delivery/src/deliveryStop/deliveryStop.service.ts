import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeliveryStopServiceBase } from "./base/deliveryStop.service.base";

@Injectable()
export class DeliveryStopService extends DeliveryStopServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
