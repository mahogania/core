import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DunningTypeServiceBase } from "./base/dunningType.service.base";

@Injectable()
export class DunningTypeService extends DunningTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
