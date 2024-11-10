import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerGroupItemServiceBase } from "./base/customerGroupItem.service.base";

@Injectable()
export class CustomerGroupItemService extends CustomerGroupItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
