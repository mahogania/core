import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocShareServiceBase } from "./base/docShare.service.base";

@Injectable()
export class DocShareService extends DocShareServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
