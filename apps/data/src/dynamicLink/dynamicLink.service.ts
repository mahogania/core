import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DynamicLinkServiceBase } from "./base/dynamicLink.service.base";

@Injectable()
export class DynamicLinkService extends DynamicLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
