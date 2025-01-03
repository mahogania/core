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
import { ContactEmailService } from "../contactEmail.service";
import { ContactEmailCreateInput } from "./ContactEmailCreateInput";
import { ContactEmail } from "./ContactEmail";
import { ContactEmailFindManyArgs } from "./ContactEmailFindManyArgs";
import { ContactEmailWhereUniqueInput } from "./ContactEmailWhereUniqueInput";
import { ContactEmailUpdateInput } from "./ContactEmailUpdateInput";

export class ContactEmailControllerBase {
  constructor(protected readonly service: ContactEmailService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ContactEmail })
  async createContactEmail(
    @common.Body() data: ContactEmailCreateInput
  ): Promise<ContactEmail> {
    return await this.service.createContactEmail({
      data: data,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        emailId: true,
        id: true,
        idx: true,
        isPrimary: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ContactEmail] })
  @ApiNestedQuery(ContactEmailFindManyArgs)
  async contactEmails(@common.Req() request: Request): Promise<ContactEmail[]> {
    const args = plainToClass(ContactEmailFindManyArgs, request.query);
    return this.service.contactEmails({
      ...args,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        emailId: true,
        id: true,
        idx: true,
        isPrimary: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ContactEmail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async contactEmail(
    @common.Param() params: ContactEmailWhereUniqueInput
  ): Promise<ContactEmail | null> {
    const result = await this.service.contactEmail({
      where: params,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        emailId: true,
        id: true,
        idx: true,
        isPrimary: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
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
  @swagger.ApiOkResponse({ type: ContactEmail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateContactEmail(
    @common.Param() params: ContactEmailWhereUniqueInput,
    @common.Body() data: ContactEmailUpdateInput
  ): Promise<ContactEmail | null> {
    try {
      return await this.service.updateContactEmail({
        where: params,
        data: data,
        select: {
          createdAt: true,
          creation: true,
          docstatus: true,
          emailId: true,
          id: true,
          idx: true,
          isPrimary: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
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
  @swagger.ApiOkResponse({ type: ContactEmail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteContactEmail(
    @common.Param() params: ContactEmailWhereUniqueInput
  ): Promise<ContactEmail | null> {
    try {
      return await this.service.deleteContactEmail({
        where: params,
        select: {
          createdAt: true,
          creation: true,
          docstatus: true,
          emailId: true,
          id: true,
          idx: true,
          isPrimary: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
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
