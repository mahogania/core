import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomizeFormFieldServiceBase } from "./base/customizeFormField.service.base";

@Injectable()
export class CustomizeFormFieldService extends CustomizeFormFieldServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
