import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NpcVendorServiceBase } from "./base/npcVendor.service.base";

@Injectable()
export class NpcVendorService extends NpcVendorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
