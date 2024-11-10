import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemVariantServiceBase } from "./base/itemVariant.service.base";

@Injectable()
export class ItemVariantService extends ItemVariantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
