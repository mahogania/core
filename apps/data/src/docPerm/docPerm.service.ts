import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocPermServiceBase } from "./base/docPerm.service.base";

@Injectable()
export class DocPermService extends DocPermServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
