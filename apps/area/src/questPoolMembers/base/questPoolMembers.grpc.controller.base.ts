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
import { QuestPoolMembersService } from "../questPoolMembers.service";
import { QuestPoolMembersCreateInput } from "./QuestPoolMembersCreateInput";
import { QuestPoolMembersWhereInput } from "./QuestPoolMembersWhereInput";
import { QuestPoolMembersWhereUniqueInput } from "./QuestPoolMembersWhereUniqueInput";
import { QuestPoolMembersFindManyArgs } from "./QuestPoolMembersFindManyArgs";
import { QuestPoolMembersUpdateInput } from "./QuestPoolMembersUpdateInput";
import { QuestPoolMembers } from "./QuestPoolMembers";

export class QuestPoolMembersGrpcControllerBase {
  constructor(protected readonly service: QuestPoolMembersService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuestPoolMembers })
  @GrpcMethod("QuestPoolMembersService", "createQuestPoolMembers")
  async createQuestPoolMembers(
    @common.Body() data: QuestPoolMembersCreateInput
  ): Promise<QuestPoolMembers> {
    return await this.service.createQuestPoolMembers({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [QuestPoolMembers] })
  @ApiNestedQuery(QuestPoolMembersFindManyArgs)
  @GrpcMethod("QuestPoolMembersService", "questPoolMembersItems")
  async questPoolMembersItems(
    @common.Req() request: Request
  ): Promise<QuestPoolMembers[]> {
    const args = plainToClass(QuestPoolMembersFindManyArgs, request.query);
    return this.service.questPoolMembersItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QuestPoolMembers })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestPoolMembersService", "questPoolMembers")
  async questPoolMembers(
    @common.Param() params: QuestPoolMembersWhereUniqueInput
  ): Promise<QuestPoolMembers | null> {
    const result = await this.service.questPoolMembers({
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
  @swagger.ApiOkResponse({ type: QuestPoolMembers })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestPoolMembersService", "updateQuestPoolMembers")
  async updateQuestPoolMembers(
    @common.Param() params: QuestPoolMembersWhereUniqueInput,
    @common.Body() data: QuestPoolMembersUpdateInput
  ): Promise<QuestPoolMembers | null> {
    try {
      return await this.service.updateQuestPoolMembers({
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
  @swagger.ApiOkResponse({ type: QuestPoolMembers })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestPoolMembersService", "deleteQuestPoolMembers")
  async deleteQuestPoolMembers(
    @common.Param() params: QuestPoolMembersWhereUniqueInput
  ): Promise<QuestPoolMembers | null> {
    try {
      return await this.service.deleteQuestPoolMembers({
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
