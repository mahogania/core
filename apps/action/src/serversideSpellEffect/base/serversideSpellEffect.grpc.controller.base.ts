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
import { ServersideSpellEffectService } from "../serversideSpellEffect.service";
import { ServersideSpellEffectCreateInput } from "./ServersideSpellEffectCreateInput";
import { ServersideSpellEffectWhereInput } from "./ServersideSpellEffectWhereInput";
import { ServersideSpellEffectWhereUniqueInput } from "./ServersideSpellEffectWhereUniqueInput";
import { ServersideSpellEffectFindManyArgs } from "./ServersideSpellEffectFindManyArgs";
import { ServersideSpellEffectUpdateInput } from "./ServersideSpellEffectUpdateInput";
import { ServersideSpellEffect } from "./ServersideSpellEffect";

export class ServersideSpellEffectGrpcControllerBase {
  constructor(protected readonly service: ServersideSpellEffectService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ServersideSpellEffect })
  @GrpcMethod("ServersideSpellEffectService", "createServersideSpellEffect")
  async createServersideSpellEffect(
    @common.Body() data: ServersideSpellEffectCreateInput
  ): Promise<ServersideSpellEffect> {
    return await this.service.createServersideSpellEffect({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ServersideSpellEffect] })
  @ApiNestedQuery(ServersideSpellEffectFindManyArgs)
  @GrpcMethod("ServersideSpellEffectService", "serversideSpellEffects")
  async serversideSpellEffects(
    @common.Req() request: Request
  ): Promise<ServersideSpellEffect[]> {
    const args = plainToClass(ServersideSpellEffectFindManyArgs, request.query);
    return this.service.serversideSpellEffects({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ServersideSpellEffect })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ServersideSpellEffectService", "serversideSpellEffect")
  async serversideSpellEffect(
    @common.Param() params: ServersideSpellEffectWhereUniqueInput
  ): Promise<ServersideSpellEffect | null> {
    const result = await this.service.serversideSpellEffect({
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
  @swagger.ApiOkResponse({ type: ServersideSpellEffect })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ServersideSpellEffectService", "updateServersideSpellEffect")
  async updateServersideSpellEffect(
    @common.Param() params: ServersideSpellEffectWhereUniqueInput,
    @common.Body() data: ServersideSpellEffectUpdateInput
  ): Promise<ServersideSpellEffect | null> {
    try {
      return await this.service.updateServersideSpellEffect({
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
  @swagger.ApiOkResponse({ type: ServersideSpellEffect })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ServersideSpellEffectService", "deleteServersideSpellEffect")
  async deleteServersideSpellEffect(
    @common.Param() params: ServersideSpellEffectWhereUniqueInput
  ): Promise<ServersideSpellEffect | null> {
    try {
      return await this.service.deleteServersideSpellEffect({
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
