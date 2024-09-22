import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GossipMenuOptionLocaleServiceBase } from "./base/gossipMenuOptionLocale.service.base";

@Injectable()
export class GossipMenuOptionLocaleService extends GossipMenuOptionLocaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
