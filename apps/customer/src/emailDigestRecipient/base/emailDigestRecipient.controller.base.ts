/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { EmailDigestRecipientService } from "../emailDigestRecipient.service";
import { EmailDigestRecipientCreateInput } from "./EmailDigestRecipientCreateInput";
import { EmailDigestRecipient } from "./EmailDigestRecipient";
import { EmailDigestRecipientFindManyArgs } from "./EmailDigestRecipientFindManyArgs";
import { EmailDigestRecipientWhereUniqueInput } from "./EmailDigestRecipientWhereUniqueInput";
import { EmailDigestRecipientUpdateInput } from "./EmailDigestRecipientUpdateInput";

export class EmailDigestRecipientControllerBase {
  constructor(protected readonly service: EmailDigestRecipientService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EmailDigestRecipient })
  async createEmailDigestRecipient(
    @common.Body() data: EmailDigestRecipientCreateInput
  ): Promise<EmailDigestRecipient> {
    return await this.service.createEmailDigestRecipient({
      data: data,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        recipient: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [EmailDigestRecipient] })
  @ApiNestedQuery(EmailDigestRecipientFindManyArgs)
  async emailDigestRecipients(
    @common.Req() request: Request
  ): Promise<EmailDigestRecipient[]> {
    const args = plainToClass(EmailDigestRecipientFindManyArgs, request.query);
    return this.service.emailDigestRecipients({
      ...args,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        recipient: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EmailDigestRecipient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async emailDigestRecipient(
    @common.Param() params: EmailDigestRecipientWhereUniqueInput
  ): Promise<EmailDigestRecipient | null> {
    const result = await this.service.emailDigestRecipient({
      where: params,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        recipient: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: EmailDigestRecipient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEmailDigestRecipient(
    @common.Param() params: EmailDigestRecipientWhereUniqueInput,
    @common.Body() data: EmailDigestRecipientUpdateInput
  ): Promise<EmailDigestRecipient | null> {
    try {
      return await this.service.updateEmailDigestRecipient({
        where: params,
        data: data,
        select: {
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          recipient: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: EmailDigestRecipient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEmailDigestRecipient(
    @common.Param() params: EmailDigestRecipientWhereUniqueInput
  ): Promise<EmailDigestRecipient | null> {
    try {
      return await this.service.deleteEmailDigestRecipient({
        where: params,
        select: {
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          recipient: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
