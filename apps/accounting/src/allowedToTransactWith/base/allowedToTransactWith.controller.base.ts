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
import { AllowedToTransactWithService } from "../allowedToTransactWith.service";
import { AllowedToTransactWithCreateInput } from "./AllowedToTransactWithCreateInput";
import { AllowedToTransactWith } from "./AllowedToTransactWith";
import { AllowedToTransactWithFindManyArgs } from "./AllowedToTransactWithFindManyArgs";
import { AllowedToTransactWithWhereUniqueInput } from "./AllowedToTransactWithWhereUniqueInput";
import { AllowedToTransactWithUpdateInput } from "./AllowedToTransactWithUpdateInput";

export class AllowedToTransactWithControllerBase {
  constructor(protected readonly service: AllowedToTransactWithService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AllowedToTransactWith })
  async createAllowedToTransactWith(
    @common.Body() data: AllowedToTransactWithCreateInput
  ): Promise<AllowedToTransactWith> {
    return await this.service.createAllowedToTransactWith({
      data: data,
      select: {
        company: true,
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
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AllowedToTransactWith] })
  @ApiNestedQuery(AllowedToTransactWithFindManyArgs)
  async allowedToTransactWiths(
    @common.Req() request: Request
  ): Promise<AllowedToTransactWith[]> {
    const args = plainToClass(AllowedToTransactWithFindManyArgs, request.query);
    return this.service.allowedToTransactWiths({
      ...args,
      select: {
        company: true,
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
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AllowedToTransactWith })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async allowedToTransactWith(
    @common.Param() params: AllowedToTransactWithWhereUniqueInput
  ): Promise<AllowedToTransactWith | null> {
    const result = await this.service.allowedToTransactWith({
      where: params,
      select: {
        company: true,
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
  @swagger.ApiOkResponse({ type: AllowedToTransactWith })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAllowedToTransactWith(
    @common.Param() params: AllowedToTransactWithWhereUniqueInput,
    @common.Body() data: AllowedToTransactWithUpdateInput
  ): Promise<AllowedToTransactWith | null> {
    try {
      return await this.service.updateAllowedToTransactWith({
        where: params,
        data: data,
        select: {
          company: true,
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
  @swagger.ApiOkResponse({ type: AllowedToTransactWith })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAllowedToTransactWith(
    @common.Param() params: AllowedToTransactWithWhereUniqueInput
  ): Promise<AllowedToTransactWith | null> {
    try {
      return await this.service.deleteAllowedToTransactWith({
        where: params,
        select: {
          company: true,
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
