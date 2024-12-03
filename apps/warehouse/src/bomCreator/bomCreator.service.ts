import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BomCreatorServiceBase } from "./base/bomCreator.service.base";

@Injectable()
export class BomCreatorService extends BomCreatorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
