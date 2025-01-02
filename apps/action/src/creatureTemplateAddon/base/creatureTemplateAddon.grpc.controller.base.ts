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
import { CreatureTemplateAddonService } from "../creatureTemplateAddon.service";
import { CreatureTemplateAddonCreateInput } from "./CreatureTemplateAddonCreateInput";
import { CreatureTemplateAddonWhereInput } from "./CreatureTemplateAddonWhereInput";
import { CreatureTemplateAddonWhereUniqueInput } from "./CreatureTemplateAddonWhereUniqueInput";
import { CreatureTemplateAddonFindManyArgs } from "./CreatureTemplateAddonFindManyArgs";
import { CreatureTemplateAddonUpdateInput } from "./CreatureTemplateAddonUpdateInput";
import { CreatureTemplateAddon } from "./CreatureTemplateAddon";

export class CreatureTemplateAddonGrpcControllerBase {
  constructor(protected readonly service: CreatureTemplateAddonService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CreatureTemplateAddon })
  @GrpcMethod("CreatureTemplateAddonService", "createCreatureTemplateAddon")
  async createCreatureTemplateAddon(
    @common.Body() data: CreatureTemplateAddonCreateInput
  ): Promise<CreatureTemplateAddon> {
    return await this.service.createCreatureTemplateAddon({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CreatureTemplateAddon] })
  @ApiNestedQuery(CreatureTemplateAddonFindManyArgs)
  @GrpcMethod("CreatureTemplateAddonService", "creatureTemplateAddons")
  async creatureTemplateAddons(
    @common.Req() request: Request
  ): Promise<CreatureTemplateAddon[]> {
    const args = plainToClass(CreatureTemplateAddonFindManyArgs, request.query);
    return this.service.creatureTemplateAddons({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CreatureTemplateAddon })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CreatureTemplateAddonService", "creatureTemplateAddon")
  async creatureTemplateAddon(
    @common.Param() params: CreatureTemplateAddonWhereUniqueInput
  ): Promise<CreatureTemplateAddon | null> {
    const result = await this.service.creatureTemplateAddon({
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
  @swagger.ApiOkResponse({ type: CreatureTemplateAddon })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CreatureTemplateAddonService", "updateCreatureTemplateAddon")
  async updateCreatureTemplateAddon(
    @common.Param() params: CreatureTemplateAddonWhereUniqueInput,
    @common.Body() data: CreatureTemplateAddonUpdateInput
  ): Promise<CreatureTemplateAddon | null> {
    try {
      return await this.service.updateCreatureTemplateAddon({
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
  @swagger.ApiOkResponse({ type: CreatureTemplateAddon })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CreatureTemplateAddonService", "deleteCreatureTemplateAddon")
  async deleteCreatureTemplateAddon(
    @common.Param() params: CreatureTemplateAddonWhereUniqueInput
  ): Promise<CreatureTemplateAddon | null> {
    try {
      return await this.service.deleteCreatureTemplateAddon({
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