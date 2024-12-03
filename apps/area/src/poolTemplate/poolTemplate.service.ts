import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PoolTemplateServiceBase } from "./base/poolTemplate.service.base";

@Injectable()
export class PoolTemplateService extends PoolTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
