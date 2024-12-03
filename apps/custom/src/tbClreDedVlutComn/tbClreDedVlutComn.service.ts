import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TbClreDedVlutComnServiceBase } from "./base/tbClreDedVlutComn.service.base";

@Injectable()
export class TbClreDedVlutComnService extends TbClreDedVlutComnServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
