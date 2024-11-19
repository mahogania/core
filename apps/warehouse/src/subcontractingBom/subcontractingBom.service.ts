import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubcontractingBomServiceBase } from "./base/subcontractingBom.service.base";

@Injectable()
export class SubcontractingBomService extends SubcontractingBomServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
