import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConditionsServiceBase } from "./base/conditions.service.base";

@Injectable()
export class ConditionsService extends ConditionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
