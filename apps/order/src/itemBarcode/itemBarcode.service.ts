import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemBarcodeServiceBase } from "./base/itemBarcode.service.base";

@Injectable()
export class ItemBarcodeService extends ItemBarcodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
