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
import { CreatureLevelStatService } from "../creatureLevelStat.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CreatureLevelStatCreateInput } from "./CreatureLevelStatCreateInput";
import { CreatureLevelStat } from "./CreatureLevelStat";
import { CreatureLevelStatFindManyArgs } from "./CreatureLevelStatFindManyArgs";
import { CreatureLevelStatWhereUniqueInput } from "./CreatureLevelStatWhereUniqueInput";
import { CreatureLevelStatUpdateInput } from "./CreatureLevelStatUpdateInput";
import { CreatureFindManyArgs } from "../../creature/base/CreatureFindManyArgs";
import { Creature } from "../../creature/base/Creature";
import { CreatureWhereUniqueInput } from "../../creature/base/CreatureWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CreatureLevelStatControllerBase {
  constructor(
    protected readonly service: CreatureLevelStatService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CreatureLevelStat })
  @nestAccessControl.UseRoles({
    resource: "CreatureLevelStat",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CreatureLevelStatCreateInput,
  })
  async createCreatureLevelStat(
    @common.Body() data: CreatureLevelStatCreateInput
  ): Promise<CreatureLevelStat> {
    return await this.service.createCreatureLevelStat({
      data: data,
      select: {
        Prana: true,
        comment: true,
        createdAt: true,
        id: true,
        kind: true,
        level: true,
        power: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [CreatureLevelStat] })
  @ApiNestedQuery(CreatureLevelStatFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CreatureLevelStat",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async creatureLevelStats(
    @common.Req() request: Request
  ): Promise<CreatureLevelStat[]> {
    const args = plainToClass(CreatureLevelStatFindManyArgs, request.query);
    return this.service.creatureLevelStats({
      ...args,
      select: {
        Prana: true,
        comment: true,
        createdAt: true,
        id: true,
        kind: true,
        level: true,
        power: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CreatureLevelStat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CreatureLevelStat",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async creatureLevelStat(
    @common.Param() params: CreatureLevelStatWhereUniqueInput
  ): Promise<CreatureLevelStat | null> {
    const result = await this.service.creatureLevelStat({
      where: params,
      select: {
        Prana: true,
        comment: true,
        createdAt: true,
        id: true,
        kind: true,
        level: true,
        power: true,
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
  @swagger.ApiOkResponse({ type: CreatureLevelStat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CreatureLevelStat",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CreatureLevelStatUpdateInput,
  })
  async updateCreatureLevelStat(
    @common.Param() params: CreatureLevelStatWhereUniqueInput,
    @common.Body() data: CreatureLevelStatUpdateInput
  ): Promise<CreatureLevelStat | null> {
    try {
      return await this.service.updateCreatureLevelStat({
        where: params,
        data: data,
        select: {
          Prana: true,
          comment: true,
          createdAt: true,
          id: true,
          kind: true,
          level: true,
          power: true,
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
  @swagger.ApiOkResponse({ type: CreatureLevelStat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CreatureLevelStat",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCreatureLevelStat(
    @common.Param() params: CreatureLevelStatWhereUniqueInput
  ): Promise<CreatureLevelStat | null> {
    try {
      return await this.service.deleteCreatureLevelStat({
        where: params,
        select: {
          Prana: true,
          comment: true,
          createdAt: true,
          id: true,
          kind: true,
          level: true,
          power: true,
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
    @common.Param() params: CreatureLevelStatWhereUniqueInput
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
    resource: "CreatureLevelStat",
    action: "update",
    possession: "any",
  })
  async connectCreatures(
    @common.Param() params: CreatureLevelStatWhereUniqueInput,
    @common.Body() body: CreatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      creatures: {
        connect: body,
      },
    };
    await this.service.updateCreatureLevelStat({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/creatures")
  @nestAccessControl.UseRoles({
    resource: "CreatureLevelStat",
    action: "update",
    possession: "any",
  })
  async updateCreatures(
    @common.Param() params: CreatureLevelStatWhereUniqueInput,
    @common.Body() body: CreatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      creatures: {
        set: body,
      },
    };
    await this.service.updateCreatureLevelStat({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/creatures")
  @nestAccessControl.UseRoles({
    resource: "CreatureLevelStat",
    action: "update",
    possession: "any",
  })
  async disconnectCreatures(
    @common.Param() params: CreatureLevelStatWhereUniqueInput,
    @common.Body() body: CreatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      creatures: {
        disconnect: body,
      },
    };
    await this.service.updateCreatureLevelStat({
      where: params,
      data,
      select: { id: true },
    });
  }
}
