import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemCustomerDetailServiceBase } from "./base/itemCustomerDetail.service.base";

@Injectable()
export class ItemCustomerDetailService extends ItemCustomerDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
