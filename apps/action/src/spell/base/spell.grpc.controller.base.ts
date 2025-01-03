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
import { SpellService } from "../spell.service";
import { SpellCreateInput } from "./SpellCreateInput";
import { SpellWhereInput } from "./SpellWhereInput";
import { SpellWhereUniqueInput } from "./SpellWhereUniqueInput";
import { SpellFindManyArgs } from "./SpellFindManyArgs";
import { SpellUpdateInput } from "./SpellUpdateInput";
import { Spell } from "./Spell";

export class SpellGrpcControllerBase {
  constructor(protected readonly service: SpellService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Spell })
  @GrpcMethod("SpellService", "createSpell")
  async createSpell(@common.Body() data: SpellCreateInput): Promise<Spell> {
    return await this.service.createSpell({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Spell] })
  @ApiNestedQuery(SpellFindManyArgs)
  @GrpcMethod("SpellService", "spells")
  async spells(@common.Req() request: Request): Promise<Spell[]> {
    const args = plainToClass(SpellFindManyArgs, request.query);
    return this.service.spells({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Spell })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("SpellService", "spell")
  async spell(
    @common.Param() params: SpellWhereUniqueInput
  ): Promise<Spell | null> {
    const result = await this.service.spell({
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
  @swagger.ApiOkResponse({ type: Spell })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("SpellService", "updateSpell")
  async updateSpell(
    @common.Param() params: SpellWhereUniqueInput,
    @common.Body() data: SpellUpdateInput
  ): Promise<Spell | null> {
    try {
      return await this.service.updateSpell({
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
  @swagger.ApiOkResponse({ type: Spell })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("SpellService", "deleteSpell")
  async deleteSpell(
    @common.Param() params: SpellWhereUniqueInput
  ): Promise<Spell | null> {
    try {
      return await this.service.deleteSpell({
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
