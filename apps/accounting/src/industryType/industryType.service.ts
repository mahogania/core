import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IndustryTypeServiceBase } from "./base/industryType.service.base";

@Injectable()
export class IndustryTypeService extends IndustryTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
