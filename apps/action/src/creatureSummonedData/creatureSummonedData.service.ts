import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureSummonedDataServiceBase } from "./base/creatureSummonedData.service.base";

@Injectable()
export class CreatureSummonedDataService extends CreatureSummonedDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
