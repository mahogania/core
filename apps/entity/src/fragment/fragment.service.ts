import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FragmentServiceBase } from "./base/fragment.service.base";

@Injectable()
export class FragmentService extends FragmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
