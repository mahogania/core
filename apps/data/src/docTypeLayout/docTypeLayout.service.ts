import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocTypeLayoutServiceBase } from "./base/docTypeLayout.service.base";

@Injectable()
export class DocTypeLayoutService extends DocTypeLayoutServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
