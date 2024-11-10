import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AllowedToTransactWithServiceBase } from "./base/allowedToTransactWith.service.base";

@Injectable()
export class AllowedToTransactWithService extends AllowedToTransactWithServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
