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
import { ConversationActorsService } from "../conversationActors.service";
import { ConversationActorsCreateInput } from "./ConversationActorsCreateInput";
import { ConversationActorsWhereInput } from "./ConversationActorsWhereInput";
import { ConversationActorsWhereUniqueInput } from "./ConversationActorsWhereUniqueInput";
import { ConversationActorsFindManyArgs } from "./ConversationActorsFindManyArgs";
import { ConversationActorsUpdateInput } from "./ConversationActorsUpdateInput";
import { ConversationActors } from "./ConversationActors";

export class ConversationActorsGrpcControllerBase {
  constructor(protected readonly service: ConversationActorsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ConversationActors })
  @GrpcMethod("ConversationActorsService", "createConversationActors")
  async createConversationActors(
    @common.Body() data: ConversationActorsCreateInput
  ): Promise<ConversationActors> {
    return await this.service.createConversationActors({
      data: data,
      select: {
        activePlayerObject: true,
        conversationActorGuid: true,
        conversationActorId: true,
        conversationId: true,
        createdAt: true,
        creatureDisplayInfoId: true,
        creatureId: true,
        id: true,
        idx: true,
        noActorObject: true,
        updatedAt: true,
        verifiedBuild: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ConversationActors] })
  @ApiNestedQuery(ConversationActorsFindManyArgs)
  @GrpcMethod("ConversationActorsService", "conversationActorsItems")
  async conversationActorsItems(
    @common.Req() request: Request
  ): Promise<ConversationActors[]> {
    const args = plainToClass(ConversationActorsFindManyArgs, request.query);
    return this.service.conversationActorsItems({
      ...args,
      select: {
        activePlayerObject: true,
        conversationActorGuid: true,
        conversationActorId: true,
        conversationId: true,
        createdAt: true,
        creatureDisplayInfoId: true,
        creatureId: true,
        id: true,
        idx: true,
        noActorObject: true,
        updatedAt: true,
        verifiedBuild: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ConversationActors })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ConversationActorsService", "conversationActors")
  async conversationActors(
    @common.Param() params: ConversationActorsWhereUniqueInput
  ): Promise<ConversationActors | null> {
    const result = await this.service.conversationActors({
      where: params,
      select: {
        activePlayerObject: true,
        conversationActorGuid: true,
        conversationActorId: true,
        conversationId: true,
        createdAt: true,
        creatureDisplayInfoId: true,
        creatureId: true,
        id: true,
        idx: true,
        noActorObject: true,
        updatedAt: true,
        verifiedBuild: true,
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
  @swagger.ApiOkResponse({ type: ConversationActors })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ConversationActorsService", "updateConversationActors")
  async updateConversationActors(
    @common.Param() params: ConversationActorsWhereUniqueInput,
    @common.Body() data: ConversationActorsUpdateInput
  ): Promise<ConversationActors | null> {
    try {
      return await this.service.updateConversationActors({
        where: params,
        data: data,
        select: {
          activePlayerObject: true,
          conversationActorGuid: true,
          conversationActorId: true,
          conversationId: true,
          createdAt: true,
          creatureDisplayInfoId: true,
          creatureId: true,
          id: true,
          idx: true,
          noActorObject: true,
          updatedAt: true,
          verifiedBuild: true,
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
  @swagger.ApiOkResponse({ type: ConversationActors })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ConversationActorsService", "deleteConversationActors")
  async deleteConversationActors(
    @common.Param() params: ConversationActorsWhereUniqueInput
  ): Promise<ConversationActors | null> {
    try {
      return await this.service.deleteConversationActors({
        where: params,
        select: {
          activePlayerObject: true,
          conversationActorGuid: true,
          conversationActorId: true,
          conversationId: true,
          createdAt: true,
          creatureDisplayInfoId: true,
          creatureId: true,
          id: true,
          idx: true,
          noActorObject: true,
          updatedAt: true,
          verifiedBuild: true,
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
