import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerGroupServiceBase } from "./base/customerGroup.service.base";

@Injectable()
export class CustomerGroupService extends CustomerGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
