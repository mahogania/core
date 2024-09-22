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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CreatureImmunitiesService } from "../creatureImmunities.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CreatureImmunitiesCreateInput } from "./CreatureImmunitiesCreateInput";
import { CreatureImmunities } from "./CreatureImmunities";
import { CreatureImmunitiesFindManyArgs } from "./CreatureImmunitiesFindManyArgs";
import { CreatureImmunitiesWhereUniqueInput } from "./CreatureImmunitiesWhereUniqueInput";
import { CreatureImmunitiesUpdateInput } from "./CreatureImmunitiesUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CreatureImmunitiesControllerBase {
  constructor(
    protected readonly service: CreatureImmunitiesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CreatureImmunities })
  @nestAccessControl.UseRoles({
    resource: "CreatureImmunities",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CreatureImmunitiesCreateInput,
  })
  async createCreatureImmunities(
    @common.Body() data: CreatureImmunitiesCreateInput
  ): Promise<CreatureImmunities> {
    return await this.service.createCreatureImmunities({
      data: data,
      select: {
        auras: true,
        comment: true,
        createdAt: true,
        dispelTypeMask: true,
        effects: true,
        id: true,
        immuneAoE: true,
        immuneChain: true,
        mechanicsMask: true,
        schoolMask: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [CreatureImmunities] })
  @ApiNestedQuery(CreatureImmunitiesFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CreatureImmunities",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async creatureImmunitiesItems(
    @common.Req() request: Request
  ): Promise<CreatureImmunities[]> {
    const args = plainToClass(CreatureImmunitiesFindManyArgs, request.query);
    return this.service.creatureImmunitiesItems({
      ...args,
      select: {
        auras: true,
        comment: true,
        createdAt: true,
        dispelTypeMask: true,
        effects: true,
        id: true,
        immuneAoE: true,
        immuneChain: true,
        mechanicsMask: true,
        schoolMask: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CreatureImmunities })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CreatureImmunities",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async creatureImmunities(
    @common.Param() params: CreatureImmunitiesWhereUniqueInput
  ): Promise<CreatureImmunities | null> {
    const result = await this.service.creatureImmunities({
      where: params,
      select: {
        auras: true,
        comment: true,
        createdAt: true,
        dispelTypeMask: true,
        effects: true,
        id: true,
        immuneAoE: true,
        immuneChain: true,
        mechanicsMask: true,
        schoolMask: true,
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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CreatureImmunities })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CreatureImmunities",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CreatureImmunitiesUpdateInput,
  })
  async updateCreatureImmunities(
    @common.Param() params: CreatureImmunitiesWhereUniqueInput,
    @common.Body() data: CreatureImmunitiesUpdateInput
  ): Promise<CreatureImmunities | null> {
    try {
      return await this.service.updateCreatureImmunities({
        where: params,
        data: data,
        select: {
          auras: true,
          comment: true,
          createdAt: true,
          dispelTypeMask: true,
          effects: true,
          id: true,
          immuneAoE: true,
          immuneChain: true,
          mechanicsMask: true,
          schoolMask: true,
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
  @swagger.ApiOkResponse({ type: CreatureImmunities })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CreatureImmunities",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCreatureImmunities(
    @common.Param() params: CreatureImmunitiesWhereUniqueInput
  ): Promise<CreatureImmunities | null> {
    try {
      return await this.service.deleteCreatureImmunities({
        where: params,
        select: {
          auras: true,
          comment: true,
          createdAt: true,
          dispelTypeMask: true,
          effects: true,
          id: true,
          immuneAoE: true,
          immuneChain: true,
          mechanicsMask: true,
          schoolMask: true,
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
