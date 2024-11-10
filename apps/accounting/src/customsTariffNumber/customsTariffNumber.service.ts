import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomsTariffNumberServiceBase } from "./base/customsTariffNumber.service.base";

@Injectable()
export class CustomsTariffNumberService extends CustomsTariffNumberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
