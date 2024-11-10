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
import { QuestRequestItemsConditionalService } from "../questRequestItemsConditional.service";
import { QuestRequestItemsConditionalCreateInput } from "./QuestRequestItemsConditionalCreateInput";
import { QuestRequestItemsConditionalWhereInput } from "./QuestRequestItemsConditionalWhereInput";
import { QuestRequestItemsConditionalWhereUniqueInput } from "./QuestRequestItemsConditionalWhereUniqueInput";
import { QuestRequestItemsConditionalFindManyArgs } from "./QuestRequestItemsConditionalFindManyArgs";
import { QuestRequestItemsConditionalUpdateInput } from "./QuestRequestItemsConditionalUpdateInput";
import { QuestRequestItemsConditional } from "./QuestRequestItemsConditional";

export class QuestRequestItemsConditionalGrpcControllerBase {
  constructor(
    protected readonly service: QuestRequestItemsConditionalService
  ) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuestRequestItemsConditional })
  @GrpcMethod(
    "QuestRequestItemsConditionalService",
    "createQuestRequestItemsConditional"
  )
  async createQuestRequestItemsConditional(
    @common.Body() data: QuestRequestItemsConditionalCreateInput
  ): Promise<QuestRequestItemsConditional> {
    return await this.service.createQuestRequestItemsConditional({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [QuestRequestItemsConditional] })
  @ApiNestedQuery(QuestRequestItemsConditionalFindManyArgs)
  @GrpcMethod(
    "QuestRequestItemsConditionalService",
    "questRequestItemsConditionals"
  )
  async questRequestItemsConditionals(
    @common.Req() request: Request
  ): Promise<QuestRequestItemsConditional[]> {
    const args = plainToClass(
      QuestRequestItemsConditionalFindManyArgs,
      request.query
    );
    return this.service.questRequestItemsConditionals({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QuestRequestItemsConditional })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "QuestRequestItemsConditionalService",
    "questRequestItemsConditional"
  )
  async questRequestItemsConditional(
    @common.Param() params: QuestRequestItemsConditionalWhereUniqueInput
  ): Promise<QuestRequestItemsConditional | null> {
    const result = await this.service.questRequestItemsConditional({
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
  @swagger.ApiOkResponse({ type: QuestRequestItemsConditional })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "QuestRequestItemsConditionalService",
    "updateQuestRequestItemsConditional"
  )
  async updateQuestRequestItemsConditional(
    @common.Param() params: QuestRequestItemsConditionalWhereUniqueInput,
    @common.Body() data: QuestRequestItemsConditionalUpdateInput
  ): Promise<QuestRequestItemsConditional | null> {
    try {
      return await this.service.updateQuestRequestItemsConditional({
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
  @swagger.ApiOkResponse({ type: QuestRequestItemsConditional })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "QuestRequestItemsConditionalService",
    "deleteQuestRequestItemsConditional"
  )
  async deleteQuestRequestItemsConditional(
    @common.Param() params: QuestRequestItemsConditionalWhereUniqueInput
  ): Promise<QuestRequestItemsConditional | null> {
    try {
      return await this.service.deleteQuestRequestItemsConditional({
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
