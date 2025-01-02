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
import { CreatureFormationService } from "../creatureFormation.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CreatureFormationCreateInput } from "./CreatureFormationCreateInput";
import { CreatureFormation } from "./CreatureFormation";
import { CreatureFormationFindManyArgs } from "./CreatureFormationFindManyArgs";
import { CreatureFormationWhereUniqueInput } from "./CreatureFormationWhereUniqueInput";
import { CreatureFormationUpdateInput } from "./CreatureFormationUpdateInput";
import { CreatureFindManyArgs } from "../../creature/base/CreatureFindManyArgs";
import { Creature } from "../../creature/base/Creature";
import { CreatureWhereUniqueInput } from "../../creature/base/CreatureWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CreatureFormationControllerBase {
  constructor(
    protected readonly service: CreatureFormationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CreatureFormation })
  @nestAccessControl.UseRoles({
    resource: "CreatureFormation",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CreatureFormationCreateInput,
  })
  async createCreatureFormation(
    @common.Body() data: CreatureFormationCreateInput
  ): Promise<CreatureFormation> {
    return await this.service.createCreatureFormation({
      data: data,
      select: {
        angle: true,
        boxId: true,
        createdAt: true,
        dist: true,
        groupId: true,
        id: true,
        leaderId: true,
        memberId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [CreatureFormation] })
  @ApiNestedQuery(CreatureFormationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CreatureFormation",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async creatureFormations(
    @common.Req() request: Request
  ): Promise<CreatureFormation[]> {
    const args = plainToClass(CreatureFormationFindManyArgs, request.query);
    return this.service.creatureFormations({
      ...args,
      select: {
        angle: true,
        boxId: true,
        createdAt: true,
        dist: true,
        groupId: true,
        id: true,
        leaderId: true,
        memberId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CreatureFormation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CreatureFormation",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async creatureFormation(
    @common.Param() params: CreatureFormationWhereUniqueInput
  ): Promise<CreatureFormation | null> {
    const result = await this.service.creatureFormation({
      where: params,
      select: {
        angle: true,
        boxId: true,
        createdAt: true,
        dist: true,
        groupId: true,
        id: true,
        leaderId: true,
        memberId: true,
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
  @swagger.ApiOkResponse({ type: CreatureFormation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CreatureFormation",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CreatureFormationUpdateInput,
  })
  async updateCreatureFormation(
    @common.Param() params: CreatureFormationWhereUniqueInput,
    @common.Body() data: CreatureFormationUpdateInput
  ): Promise<CreatureFormation | null> {
    try {
      return await this.service.updateCreatureFormation({
        where: params,
        data: data,
        select: {
          angle: true,
          boxId: true,
          createdAt: true,
          dist: true,
          groupId: true,
          id: true,
          leaderId: true,
          memberId: true,
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
  @swagger.ApiOkResponse({ type: CreatureFormation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CreatureFormation",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCreatureFormation(
    @common.Param() params: CreatureFormationWhereUniqueInput
  ): Promise<CreatureFormation | null> {
    try {
      return await this.service.deleteCreatureFormation({
        where: params,
        select: {
          angle: true,
          boxId: true,
          createdAt: true,
          dist: true,
          groupId: true,
          id: true,
          leaderId: true,
          memberId: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/creatures")
  @ApiNestedQuery(CreatureFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Creature",
    action: "read",
    possession: "any",
  })
  async findCreatures(
    @common.Req() request: Request,
    @common.Param() params: CreatureFormationWhereUniqueInput
  ): Promise<Creature[]> {
    const query = plainToClass(CreatureFindManyArgs, request.query);
    const results = await this.service.findCreatures(params.id, {
      ...query,
      select: {
        areaId: true,
        behaviourName: true,
        createdAt: true,

        creatureEquipments: {
          select: {
            id: true,
          },
        },

        creatureFormations: {
          select: {
            id: true,
          },
        },

        creatureImmunities: {
          select: {
            id: true,
          },
        },

        creatureLevelStats: {
          select: {
            id: true,
          },
        },

        creatureLoots: {
          select: {
            id: true,
          },
        },

        creatureModelInfo: {
          select: {
            id: true,
          },
        },

        creatureMovementInfos: {
          select: {
            id: true,
          },
        },

        id: true,
        mapId: true,
        modelId: true,
        name: true,
        realmId: true,
        transformId: true,
        updatedAt: true,
        zoneId: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/creatures")
  @nestAccessControl.UseRoles({
    resource: "CreatureFormation",
    action: "update",
    possession: "any",
  })
  async connectCreatures(
    @common.Param() params: CreatureFormationWhereUniqueInput,
    @common.Body() body: CreatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      creatures: {
        connect: body,
      },
    };
    await this.service.updateCreatureFormation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/creatures")
  @nestAccessControl.UseRoles({
    resource: "CreatureFormation",
    action: "update",
    possession: "any",
  })
  async updateCreatures(
    @common.Param() params: CreatureFormationWhereUniqueInput,
    @common.Body() body: CreatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      creatures: {
        set: body,
      },
    };
    await this.service.updateCreatureFormation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/creatures")
  @nestAccessControl.UseRoles({
    resource: "CreatureFormation",
    action: "update",
    possession: "any",
  })
  async disconnectCreatures(
    @common.Param() params: CreatureFormationWhereUniqueInput,
    @common.Body() body: CreatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      creatures: {
        disconnect: body,
      },
    };
    await this.service.updateCreatureFormation({
      where: params,
      data,
      select: { id: true },
    });
  }
}