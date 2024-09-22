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
import { GrpcMethod } from "@nestjs/microservices";
import { ItemRandomBonusListTemplateService } from "../itemRandomBonusListTemplate.service";
import { ItemRandomBonusListTemplateCreateInput } from "./ItemRandomBonusListTemplateCreateInput";
import { ItemRandomBonusListTemplateWhereInput } from "./ItemRandomBonusListTemplateWhereInput";
import { ItemRandomBonusListTemplateWhereUniqueInput } from "./ItemRandomBonusListTemplateWhereUniqueInput";
import { ItemRandomBonusListTemplateFindManyArgs } from "./ItemRandomBonusListTemplateFindManyArgs";
import { ItemRandomBonusListTemplateUpdateInput } from "./ItemRandomBonusListTemplateUpdateInput";
import { ItemRandomBonusListTemplate } from "./ItemRandomBonusListTemplate";

export class ItemRandomBonusListTemplateGrpcControllerBase {
  constructor(protected readonly service: ItemRandomBonusListTemplateService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ItemRandomBonusListTemplate })
  @GrpcMethod(
    "ItemRandomBonusListTemplateService",
    "createItemRandomBonusListTemplate"
  )
  async createItemRandomBonusListTemplate(
    @common.Body() data: ItemRandomBonusListTemplateCreateInput
  ): Promise<ItemRandomBonusListTemplate> {
    return await this.service.createItemRandomBonusListTemplate({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ItemRandomBonusListTemplate] })
  @ApiNestedQuery(ItemRandomBonusListTemplateFindManyArgs)
  @GrpcMethod(
    "ItemRandomBonusListTemplateService",
    "itemRandomBonusListTemplates"
  )
  async itemRandomBonusListTemplates(
    @common.Req() request: Request
  ): Promise<ItemRandomBonusListTemplate[]> {
    const args = plainToClass(
      ItemRandomBonusListTemplateFindManyArgs,
      request.query
    );
    return this.service.itemRandomBonusListTemplates({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ItemRandomBonusListTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "ItemRandomBonusListTemplateService",
    "itemRandomBonusListTemplate"
  )
  async itemRandomBonusListTemplate(
    @common.Param() params: ItemRandomBonusListTemplateWhereUniqueInput
  ): Promise<ItemRandomBonusListTemplate | null> {
    const result = await this.service.itemRandomBonusListTemplate({
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
  @swagger.ApiOkResponse({ type: ItemRandomBonusListTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "ItemRandomBonusListTemplateService",
    "updateItemRandomBonusListTemplate"
  )
  async updateItemRandomBonusListTemplate(
    @common.Param() params: ItemRandomBonusListTemplateWhereUniqueInput,
    @common.Body() data: ItemRandomBonusListTemplateUpdateInput
  ): Promise<ItemRandomBonusListTemplate | null> {
    try {
      return await this.service.updateItemRandomBonusListTemplate({
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
  @swagger.ApiOkResponse({ type: ItemRandomBonusListTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "ItemRandomBonusListTemplateService",
    "deleteItemRandomBonusListTemplate"
  )
  async deleteItemRandomBonusListTemplate(
    @common.Param() params: ItemRandomBonusListTemplateWhereUniqueInput
  ): Promise<ItemRandomBonusListTemplate | null> {
    try {
      return await this.service.deleteItemRandomBonusListTemplate({
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
