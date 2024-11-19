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
import { LedgerMergeAccountsService } from "../ledgerMergeAccounts.service";
import { LedgerMergeAccountsCreateInput } from "./LedgerMergeAccountsCreateInput";
import { LedgerMergeAccounts } from "./LedgerMergeAccounts";
import { LedgerMergeAccountsFindManyArgs } from "./LedgerMergeAccountsFindManyArgs";
import { LedgerMergeAccountsWhereUniqueInput } from "./LedgerMergeAccountsWhereUniqueInput";
import { LedgerMergeAccountsUpdateInput } from "./LedgerMergeAccountsUpdateInput";

export class LedgerMergeAccountsControllerBase {
  constructor(protected readonly service: LedgerMergeAccountsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LedgerMergeAccounts })
  async createLedgerMergeAccounts(
    @common.Body() data: LedgerMergeAccountsCreateInput
  ): Promise<LedgerMergeAccounts> {
    return await this.service.createLedgerMergeAccounts({
      data: data,
      select: {
        account: true,
        accountName: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        merged: true,
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
  @swagger.ApiOkResponse({ type: [LedgerMergeAccounts] })
  @ApiNestedQuery(LedgerMergeAccountsFindManyArgs)
  async ledgerMergeAccountsItems(
    @common.Req() request: Request
  ): Promise<LedgerMergeAccounts[]> {
    const args = plainToClass(LedgerMergeAccountsFindManyArgs, request.query);
    return this.service.ledgerMergeAccountsItems({
      ...args,
      select: {
        account: true,
        accountName: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        merged: true,
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
  @swagger.ApiOkResponse({ type: LedgerMergeAccounts })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async ledgerMergeAccounts(
    @common.Param() params: LedgerMergeAccountsWhereUniqueInput
  ): Promise<LedgerMergeAccounts | null> {
    const result = await this.service.ledgerMergeAccounts({
      where: params,
      select: {
        account: true,
        accountName: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        merged: true,
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
  @swagger.ApiOkResponse({ type: LedgerMergeAccounts })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLedgerMergeAccounts(
    @common.Param() params: LedgerMergeAccountsWhereUniqueInput,
    @common.Body() data: LedgerMergeAccountsUpdateInput
  ): Promise<LedgerMergeAccounts | null> {
    try {
      return await this.service.updateLedgerMergeAccounts({
        where: params,
        data: data,
        select: {
          account: true,
          accountName: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          merged: true,
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
  @swagger.ApiOkResponse({ type: LedgerMergeAccounts })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLedgerMergeAccounts(
    @common.Param() params: LedgerMergeAccountsWhereUniqueInput
  ): Promise<LedgerMergeAccounts | null> {
    try {
      return await this.service.deleteLedgerMergeAccounts({
        where: params,
        select: {
          account: true,
          accountName: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          merged: true,
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