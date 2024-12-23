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
import { CreatureTemplateSparringService } from "../creatureTemplateSparring.service";
import { CreatureTemplateSparringCreateInput } from "./CreatureTemplateSparringCreateInput";
import { CreatureTemplateSparringWhereInput } from "./CreatureTemplateSparringWhereInput";
import { CreatureTemplateSparringWhereUniqueInput } from "./CreatureTemplateSparringWhereUniqueInput";
import { CreatureTemplateSparringFindManyArgs } from "./CreatureTemplateSparringFindManyArgs";
import { CreatureTemplateSparringUpdateInput } from "./CreatureTemplateSparringUpdateInput";
import { CreatureTemplateSparring } from "./CreatureTemplateSparring";

export class CreatureTemplateSparringGrpcControllerBase {
  constructor(protected readonly service: CreatureTemplateSparringService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CreatureTemplateSparring })
  @GrpcMethod(
    "CreatureTemplateSparringService",
    "createCreatureTemplateSparring"
  )
  async createCreatureTemplateSparring(
    @common.Body() data: CreatureTemplateSparringCreateInput
  ): Promise<CreatureTemplateSparring> {
    return await this.service.createCreatureTemplateSparring({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CreatureTemplateSparring] })
  @ApiNestedQuery(CreatureTemplateSparringFindManyArgs)
  @GrpcMethod("CreatureTemplateSparringService", "creatureTemplateSparrings")
  async creatureTemplateSparrings(
    @common.Req() request: Request
  ): Promise<CreatureTemplateSparring[]> {
    const args = plainToClass(
      CreatureTemplateSparringFindManyArgs,
      request.query
    );
    return this.service.creatureTemplateSparrings({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CreatureTemplateSparring })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CreatureTemplateSparringService", "creatureTemplateSparring")
  async creatureTemplateSparring(
    @common.Param() params: CreatureTemplateSparringWhereUniqueInput
  ): Promise<CreatureTemplateSparring | null> {
    const result = await this.service.creatureTemplateSparring({
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
  @swagger.ApiOkResponse({ type: CreatureTemplateSparring })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "CreatureTemplateSparringService",
    "updateCreatureTemplateSparring"
  )
  async updateCreatureTemplateSparring(
    @common.Param() params: CreatureTemplateSparringWhereUniqueInput,
    @common.Body() data: CreatureTemplateSparringUpdateInput
  ): Promise<CreatureTemplateSparring | null> {
    try {
      return await this.service.updateCreatureTemplateSparring({
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
  @swagger.ApiOkResponse({ type: CreatureTemplateSparring })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "CreatureTemplateSparringService",
    "deleteCreatureTemplateSparring"
  )
  async deleteCreatureTemplateSparring(
    @common.Param() params: CreatureTemplateSparringWhereUniqueInput
  ): Promise<CreatureTemplateSparring | null> {
    try {
      return await this.service.deleteCreatureTemplateSparring({
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
