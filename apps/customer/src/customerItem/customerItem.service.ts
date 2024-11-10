import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerItemServiceBase } from "./base/customerItem.service.base";

@Injectable()
export class CustomerItemService extends CustomerItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
