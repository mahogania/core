import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocTypeServiceBase } from "./base/docType.service.base";

@Injectable()
export class DocTypeService extends DocTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
