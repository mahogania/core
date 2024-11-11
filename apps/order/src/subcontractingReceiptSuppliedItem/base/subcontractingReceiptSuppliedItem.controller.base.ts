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
import { SubcontractingReceiptSuppliedItemService } from "../subcontractingReceiptSuppliedItem.service";
import { SubcontractingReceiptSuppliedItemCreateInput } from "./SubcontractingReceiptSuppliedItemCreateInput";
import { SubcontractingReceiptSuppliedItem } from "./SubcontractingReceiptSuppliedItem";
import { SubcontractingReceiptSuppliedItemFindManyArgs } from "./SubcontractingReceiptSuppliedItemFindManyArgs";
import { SubcontractingReceiptSuppliedItemWhereUniqueInput } from "./SubcontractingReceiptSuppliedItemWhereUniqueInput";
import { SubcontractingReceiptSuppliedItemUpdateInput } from "./SubcontractingReceiptSuppliedItemUpdateInput";

export class SubcontractingReceiptSuppliedItemControllerBase {
  constructor(
    protected readonly service: SubcontractingReceiptSuppliedItemService
  ) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SubcontractingReceiptSuppliedItem })
  async createSubcontractingReceiptSuppliedItem(
    @common.Body() data: SubcontractingReceiptSuppliedItemCreateInput
  ): Promise<SubcontractingReceiptSuppliedItem> {
    return await this.service.createSubcontractingReceiptSuppliedItem({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SubcontractingReceiptSuppliedItem] })
  @ApiNestedQuery(SubcontractingReceiptSuppliedItemFindManyArgs)
  async subcontractingReceiptSuppliedItems(
    @common.Req() request: Request
  ): Promise<SubcontractingReceiptSuppliedItem[]> {
    const args = plainToClass(
      SubcontractingReceiptSuppliedItemFindManyArgs,
      request.query
    );
    return this.service.subcontractingReceiptSuppliedItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SubcontractingReceiptSuppliedItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async subcontractingReceiptSuppliedItem(
    @common.Param() params: SubcontractingReceiptSuppliedItemWhereUniqueInput
  ): Promise<SubcontractingReceiptSuppliedItem | null> {
    const result = await this.service.subcontractingReceiptSuppliedItem({
      where: params,
      select: {
        createdAt: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: SubcontractingReceiptSuppliedItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSubcontractingReceiptSuppliedItem(
    @common.Param() params: SubcontractingReceiptSuppliedItemWhereUniqueInput,
    @common.Body() data: SubcontractingReceiptSuppliedItemUpdateInput
  ): Promise<SubcontractingReceiptSuppliedItem | null> {
    try {
      return await this.service.updateSubcontractingReceiptSuppliedItem({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: SubcontractingReceiptSuppliedItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSubcontractingReceiptSuppliedItem(
    @common.Param() params: SubcontractingReceiptSuppliedItemWhereUniqueInput
  ): Promise<SubcontractingReceiptSuppliedItem | null> {
    try {
      return await this.service.deleteSubcontractingReceiptSuppliedItem({
        where: params,
        select: {
          createdAt: true,
          id: true,
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