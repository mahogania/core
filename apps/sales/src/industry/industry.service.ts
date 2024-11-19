import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IndustryServiceBase } from "./base/industry.service.base";

@Injectable()
export class IndustryService extends IndustryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
