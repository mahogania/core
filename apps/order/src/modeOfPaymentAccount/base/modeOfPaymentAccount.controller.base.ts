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
import { ModeOfPaymentAccountService } from "../modeOfPaymentAccount.service";
import { ModeOfPaymentAccountCreateInput } from "./ModeOfPaymentAccountCreateInput";
import { ModeOfPaymentAccount } from "./ModeOfPaymentAccount";
import { ModeOfPaymentAccountFindManyArgs } from "./ModeOfPaymentAccountFindManyArgs";
import { ModeOfPaymentAccountWhereUniqueInput } from "./ModeOfPaymentAccountWhereUniqueInput";
import { ModeOfPaymentAccountUpdateInput } from "./ModeOfPaymentAccountUpdateInput";

export class ModeOfPaymentAccountControllerBase {
  constructor(protected readonly service: ModeOfPaymentAccountService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ModeOfPaymentAccount })
  async createModeOfPaymentAccount(
    @common.Body() data: ModeOfPaymentAccountCreateInput
  ): Promise<ModeOfPaymentAccount> {
    return await this.service.createModeOfPaymentAccount({
      data: data,
      select: {
        company: true,
        createdAt: true,
        creation: true,
        defaultAccount: true,
        docStatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentField: true,
        parentType: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ModeOfPaymentAccount] })
  @ApiNestedQuery(ModeOfPaymentAccountFindManyArgs)
  async modeOfPaymentAccounts(
    @common.Req() request: Request
  ): Promise<ModeOfPaymentAccount[]> {
    const args = plainToClass(ModeOfPaymentAccountFindManyArgs, request.query);
    return this.service.modeOfPaymentAccounts({
      ...args,
      select: {
        company: true,
        createdAt: true,
        creation: true,
        defaultAccount: true,
        docStatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentField: true,
        parentType: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ModeOfPaymentAccount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async modeOfPaymentAccount(
    @common.Param() params: ModeOfPaymentAccountWhereUniqueInput
  ): Promise<ModeOfPaymentAccount | null> {
    const result = await this.service.modeOfPaymentAccount({
      where: params,
      select: {
        company: true,
        createdAt: true,
        creation: true,
        defaultAccount: true,
        docStatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentField: true,
        parentType: true,
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
  @swagger.ApiOkResponse({ type: ModeOfPaymentAccount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateModeOfPaymentAccount(
    @common.Param() params: ModeOfPaymentAccountWhereUniqueInput,
    @common.Body() data: ModeOfPaymentAccountUpdateInput
  ): Promise<ModeOfPaymentAccount | null> {
    try {
      return await this.service.updateModeOfPaymentAccount({
        where: params,
        data: data,
        select: {
          company: true,
          createdAt: true,
          creation: true,
          defaultAccount: true,
          docStatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentField: true,
          parentType: true,
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
  @swagger.ApiOkResponse({ type: ModeOfPaymentAccount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteModeOfPaymentAccount(
    @common.Param() params: ModeOfPaymentAccountWhereUniqueInput
  ): Promise<ModeOfPaymentAccount | null> {
    try {
      return await this.service.deleteModeOfPaymentAccount({
        where: params,
        select: {
          company: true,
          createdAt: true,
          creation: true,
          defaultAccount: true,
          docStatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentField: true,
          parentType: true,
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
