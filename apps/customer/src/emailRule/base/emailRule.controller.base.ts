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
import { EmailRuleService } from "../emailRule.service";
import { EmailRuleCreateInput } from "./EmailRuleCreateInput";
import { EmailRule } from "./EmailRule";
import { EmailRuleFindManyArgs } from "./EmailRuleFindManyArgs";
import { EmailRuleWhereUniqueInput } from "./EmailRuleWhereUniqueInput";
import { EmailRuleUpdateInput } from "./EmailRuleUpdateInput";

export class EmailRuleControllerBase {
  constructor(protected readonly service: EmailRuleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EmailRule })
  async createEmailRule(
    @common.Body() data: EmailRuleCreateInput
  ): Promise<EmailRule> {
    return await this.service.createEmailRule({
      data: data,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        emailId: true,
        id: true,
        idx: true,
        isSpam: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [EmailRule] })
  @ApiNestedQuery(EmailRuleFindManyArgs)
  async emailRules(@common.Req() request: Request): Promise<EmailRule[]> {
    const args = plainToClass(EmailRuleFindManyArgs, request.query);
    return this.service.emailRules({
      ...args,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        emailId: true,
        id: true,
        idx: true,
        isSpam: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EmailRule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async emailRule(
    @common.Param() params: EmailRuleWhereUniqueInput
  ): Promise<EmailRule | null> {
    const result = await this.service.emailRule({
      where: params,
      select: {
        createdAt: true,
        creation: true,
        docstatus: true,
        emailId: true,
        id: true,
        idx: true,
        isSpam: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
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
  @swagger.ApiOkResponse({ type: EmailRule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEmailRule(
    @common.Param() params: EmailRuleWhereUniqueInput,
    @common.Body() data: EmailRuleUpdateInput
  ): Promise<EmailRule | null> {
    try {
      return await this.service.updateEmailRule({
        where: params,
        data: data,
        select: {
          createdAt: true,
          creation: true,
          docstatus: true,
          emailId: true,
          id: true,
          idx: true,
          isSpam: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
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
  @swagger.ApiOkResponse({ type: EmailRule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEmailRule(
    @common.Param() params: EmailRuleWhereUniqueInput
  ): Promise<EmailRule | null> {
    try {
      return await this.service.deleteEmailRule({
        where: params,
        select: {
          createdAt: true,
          creation: true,
          docstatus: true,
          emailId: true,
          id: true,
          idx: true,
          isSpam: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
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
