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
import { QuestCompletionLogConditionalService } from "../questCompletionLogConditional.service";
import { QuestCompletionLogConditionalCreateInput } from "./QuestCompletionLogConditionalCreateInput";
import { QuestCompletionLogConditionalWhereInput } from "./QuestCompletionLogConditionalWhereInput";
import { QuestCompletionLogConditionalWhereUniqueInput } from "./QuestCompletionLogConditionalWhereUniqueInput";
import { QuestCompletionLogConditionalFindManyArgs } from "./QuestCompletionLogConditionalFindManyArgs";
import { QuestCompletionLogConditionalUpdateInput } from "./QuestCompletionLogConditionalUpdateInput";
import { QuestCompletionLogConditional } from "./QuestCompletionLogConditional";

export class QuestCompletionLogConditionalGrpcControllerBase {
  constructor(
    protected readonly service: QuestCompletionLogConditionalService
  ) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuestCompletionLogConditional })
  @GrpcMethod(
    "QuestCompletionLogConditionalService",
    "createQuestCompletionLogConditional"
  )
  async createQuestCompletionLogConditional(
    @common.Body() data: QuestCompletionLogConditionalCreateInput
  ): Promise<QuestCompletionLogConditional> {
    return await this.service.createQuestCompletionLogConditional({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [QuestCompletionLogConditional] })
  @ApiNestedQuery(QuestCompletionLogConditionalFindManyArgs)
  @GrpcMethod(
    "QuestCompletionLogConditionalService",
    "questCompletionLogConditionals"
  )
  async questCompletionLogConditionals(
    @common.Req() request: Request
  ): Promise<QuestCompletionLogConditional[]> {
    const args = plainToClass(
      QuestCompletionLogConditionalFindManyArgs,
      request.query
    );
    return this.service.questCompletionLogConditionals({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QuestCompletionLogConditional })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "QuestCompletionLogConditionalService",
    "questCompletionLogConditional"
  )
  async questCompletionLogConditional(
    @common.Param() params: QuestCompletionLogConditionalWhereUniqueInput
  ): Promise<QuestCompletionLogConditional | null> {
    const result = await this.service.questCompletionLogConditional({
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
  @swagger.ApiOkResponse({ type: QuestCompletionLogConditional })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "QuestCompletionLogConditionalService",
    "updateQuestCompletionLogConditional"
  )
  async updateQuestCompletionLogConditional(
    @common.Param() params: QuestCompletionLogConditionalWhereUniqueInput,
    @common.Body() data: QuestCompletionLogConditionalUpdateInput
  ): Promise<QuestCompletionLogConditional | null> {
    try {
      return await this.service.updateQuestCompletionLogConditional({
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
  @swagger.ApiOkResponse({ type: QuestCompletionLogConditional })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "QuestCompletionLogConditionalService",
    "deleteQuestCompletionLogConditional"
  )
  async deleteQuestCompletionLogConditional(
    @common.Param() params: QuestCompletionLogConditionalWhereUniqueInput
  ): Promise<QuestCompletionLogConditional | null> {
    try {
      return await this.service.deleteQuestCompletionLogConditional({
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
