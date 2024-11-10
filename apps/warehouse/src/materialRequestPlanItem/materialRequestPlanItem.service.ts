import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MaterialRequestPlanItemServiceBase } from "./base/materialRequestPlanItem.service.base";

@Injectable()
export class MaterialRequestPlanItemService extends MaterialRequestPlanItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
