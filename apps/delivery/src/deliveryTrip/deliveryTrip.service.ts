import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeliveryTripServiceBase } from "./base/deliveryTrip.service.base";

@Injectable()
export class DeliveryTripService extends DeliveryTripServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
