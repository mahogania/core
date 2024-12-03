import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocTypeLinkServiceBase } from "./base/docTypeLink.service.base";

@Injectable()
export class DocTypeLinkService extends DocTypeLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
