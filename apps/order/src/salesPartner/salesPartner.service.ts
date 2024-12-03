import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalesPartnerServiceBase } from "./base/salesPartner.service.base";

@Injectable()
export class SalesPartnerService extends SalesPartnerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
