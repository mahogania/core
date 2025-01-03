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
import { CreatureOnKillReputationService } from "../creatureOnKillReputation.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CreatureOnKillReputationCreateInput } from "./CreatureOnKillReputationCreateInput";
import { CreatureOnKillReputation } from "./CreatureOnKillReputation";
import { CreatureOnKillReputationFindManyArgs } from "./CreatureOnKillReputationFindManyArgs";
import { CreatureOnKillReputationWhereUniqueInput } from "./CreatureOnKillReputationWhereUniqueInput";
import { CreatureOnKillReputationUpdateInput } from "./CreatureOnKillReputationUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CreatureOnKillReputationControllerBase {
  constructor(
    protected readonly service: CreatureOnKillReputationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CreatureOnKillReputation })
  @nestAccessControl.UseRoles({
    resource: "CreatureOnKillReputation",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CreatureOnKillReputationCreateInput,
  })
  async createCreatureOnKillReputation(
    @common.Body() data: CreatureOnKillReputationCreateInput
  ): Promise<CreatureOnKillReputation> {
    return await this.service.createCreatureOnKillReputation({
      data: data,
      select: {
        createdAt: true,
        creatureId: true,
        id: true,
        isTeamAward1: true,
        isTeamAward2: true,
        maxStanding1: true,
        maxStanding2: true,
        rewOnKillRepFaction1: true,
        rewOnKillRepFaction2: true,
        rewOnKillRepValue1: true,
        rewOnKillRepValue2: true,
        teamDependent: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [CreatureOnKillReputation] })
  @ApiNestedQuery(CreatureOnKillReputationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CreatureOnKillReputation",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async creatureOnKillReputations(
    @common.Req() request: Request
  ): Promise<CreatureOnKillReputation[]> {
    const args = plainToClass(
      CreatureOnKillReputationFindManyArgs,
      request.query
    );
    return this.service.creatureOnKillReputations({
      ...args,
      select: {
        createdAt: true,
        creatureId: true,
        id: true,
        isTeamAward1: true,
        isTeamAward2: true,
        maxStanding1: true,
        maxStanding2: true,
        rewOnKillRepFaction1: true,
        rewOnKillRepFaction2: true,
        rewOnKillRepValue1: true,
        rewOnKillRepValue2: true,
        teamDependent: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CreatureOnKillReputation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CreatureOnKillReputation",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async creatureOnKillReputation(
    @common.Param() params: CreatureOnKillReputationWhereUniqueInput
  ): Promise<CreatureOnKillReputation | null> {
    const result = await this.service.creatureOnKillReputation({
      where: params,
      select: {
        createdAt: true,
        creatureId: true,
        id: true,
        isTeamAward1: true,
        isTeamAward2: true,
        maxStanding1: true,
        maxStanding2: true,
        rewOnKillRepFaction1: true,
        rewOnKillRepFaction2: true,
        rewOnKillRepValue1: true,
        rewOnKillRepValue2: true,
        teamDependent: true,
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
  @swagger.ApiOkResponse({ type: CreatureOnKillReputation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CreatureOnKillReputation",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CreatureOnKillReputationUpdateInput,
  })
  async updateCreatureOnKillReputation(
    @common.Param() params: CreatureOnKillReputationWhereUniqueInput,
    @common.Body() data: CreatureOnKillReputationUpdateInput
  ): Promise<CreatureOnKillReputation | null> {
    try {
      return await this.service.updateCreatureOnKillReputation({
        where: params,
        data: data,
        select: {
          createdAt: true,
          creatureId: true,
          id: true,
          isTeamAward1: true,
          isTeamAward2: true,
          maxStanding1: true,
          maxStanding2: true,
          rewOnKillRepFaction1: true,
          rewOnKillRepFaction2: true,
          rewOnKillRepValue1: true,
          rewOnKillRepValue2: true,
          teamDependent: true,
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
  @swagger.ApiOkResponse({ type: CreatureOnKillReputation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CreatureOnKillReputation",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCreatureOnKillReputation(
    @common.Param() params: CreatureOnKillReputationWhereUniqueInput
  ): Promise<CreatureOnKillReputation | null> {
    try {
      return await this.service.deleteCreatureOnKillReputation({
        where: params,
        select: {
          createdAt: true,
          creatureId: true,
          id: true,
          isTeamAward1: true,
          isTeamAward2: true,
          maxStanding1: true,
          maxStanding2: true,
          rewOnKillRepFaction1: true,
          rewOnKillRepFaction2: true,
          rewOnKillRepValue1: true,
          rewOnKillRepValue2: true,
          teamDependent: true,
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
