import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WarrantyClaimServiceBase } from "./base/warrantyClaim.service.base";

@Injectable()
export class WarrantyClaimService extends WarrantyClaimServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
