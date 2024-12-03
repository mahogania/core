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
import { MaterialRequestPlanItemService } from "../materialRequestPlanItem.service";
import { MaterialRequestPlanItemCreateInput } from "./MaterialRequestPlanItemCreateInput";
import { MaterialRequestPlanItem } from "./MaterialRequestPlanItem";
import { MaterialRequestPlanItemFindManyArgs } from "./MaterialRequestPlanItemFindManyArgs";
import { MaterialRequestPlanItemWhereUniqueInput } from "./MaterialRequestPlanItemWhereUniqueInput";
import { MaterialRequestPlanItemUpdateInput } from "./MaterialRequestPlanItemUpdateInput";

export class MaterialRequestPlanItemControllerBase {
  constructor(protected readonly service: MaterialRequestPlanItemService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MaterialRequestPlanItem })
  async createMaterialRequestPlanItem(
    @common.Body() data: MaterialRequestPlanItemCreateInput
  ): Promise<MaterialRequestPlanItem> {
    return await this.service.createMaterialRequestPlanItem({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MaterialRequestPlanItem] })
  @ApiNestedQuery(MaterialRequestPlanItemFindManyArgs)
  async materialRequestPlanItems(
    @common.Req() request: Request
  ): Promise<MaterialRequestPlanItem[]> {
    const args = plainToClass(
      MaterialRequestPlanItemFindManyArgs,
      request.query
    );
    return this.service.materialRequestPlanItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MaterialRequestPlanItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async materialRequestPlanItem(
    @common.Param() params: MaterialRequestPlanItemWhereUniqueInput
  ): Promise<MaterialRequestPlanItem | null> {
    const result = await this.service.materialRequestPlanItem({
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
  @swagger.ApiOkResponse({ type: MaterialRequestPlanItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMaterialRequestPlanItem(
    @common.Param() params: MaterialRequestPlanItemWhereUniqueInput,
    @common.Body() data: MaterialRequestPlanItemUpdateInput
  ): Promise<MaterialRequestPlanItem | null> {
    try {
      return await this.service.updateMaterialRequestPlanItem({
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
  @swagger.ApiOkResponse({ type: MaterialRequestPlanItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMaterialRequestPlanItem(
    @common.Param() params: MaterialRequestPlanItemWhereUniqueInput
  ): Promise<MaterialRequestPlanItem | null> {
    try {
      return await this.service.deleteMaterialRequestPlanItem({
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
