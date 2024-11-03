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
import { EntityService } from "../entity.service";
import { EntityCreateInput } from "./EntityCreateInput";
import { EntityWhereInput } from "./EntityWhereInput";
import { EntityWhereUniqueInput } from "./EntityWhereUniqueInput";
import { EntityFindManyArgs } from "./EntityFindManyArgs";
import { EntityUpdateInput } from "./EntityUpdateInput";
import { Entity } from "./Entity";
import { AssociationFindManyArgs } from "../../association/base/AssociationFindManyArgs";
import { Association } from "../../association/base/Association";
import { AssociationWhereUniqueInput } from "../../association/base/AssociationWhereUniqueInput";

export class EntityGrpcControllerBase {
  constructor(protected readonly service: EntityService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Entity })
  @GrpcMethod("EntityService", "createEntity")
  async createEntity(@common.Body() data: EntityCreateInput): Promise<Entity> {
    return await this.service.createEntity({
      data: {
        ...data,

        agent: data.agent
          ? {
              connect: data.agent,
            }
          : undefined,

        owner: data.owner
          ? {
              connect: data.owner,
            }
          : undefined,

        representation: data.representation
          ? {
              connect: data.representation,
            }
          : undefined,

        template: data.template
          ? {
              connect: data.template,
            }
          : undefined,
      },
      select: {
        agent: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        displayName: true,
        id: true,
        name: true,

        owner: {
          select: {
            id: true,
          },
        },

        representation: {
          select: {
            id: true,
          },
        },

        template: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        version: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Entity] })
  @ApiNestedQuery(EntityFindManyArgs)
  @GrpcMethod("EntityService", "entities")
  async entities(@common.Req() request: Request): Promise<Entity[]> {
    const args = plainToClass(EntityFindManyArgs, request.query);
    return this.service.entities({
      ...args,
      select: {
        agent: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        displayName: true,
        id: true,
        name: true,

        owner: {
          select: {
            id: true,
          },
        },

        representation: {
          select: {
            id: true,
          },
        },

        template: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        version: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Entity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("EntityService", "entity")
  async entity(
    @common.Param() params: EntityWhereUniqueInput
  ): Promise<Entity | null> {
    const result = await this.service.entity({
      where: params,
      select: {
        agent: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        displayName: true,
        id: true,
        name: true,

        owner: {
          select: {
            id: true,
          },
        },

        representation: {
          select: {
            id: true,
          },
        },

        template: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        version: true,
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
  @swagger.ApiOkResponse({ type: Entity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("EntityService", "updateEntity")
  async updateEntity(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() data: EntityUpdateInput
  ): Promise<Entity | null> {
    try {
      return await this.service.updateEntity({
        where: params,
        data: {
          ...data,

          agent: data.agent
            ? {
                connect: data.agent,
              }
            : undefined,

          owner: data.owner
            ? {
                connect: data.owner,
              }
            : undefined,

          representation: data.representation
            ? {
                connect: data.representation,
              }
            : undefined,

          template: data.template
            ? {
                connect: data.template,
              }
            : undefined,
        },
        select: {
          agent: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          displayName: true,
          id: true,
          name: true,

          owner: {
            select: {
              id: true,
            },
          },

          representation: {
            select: {
              id: true,
            },
          },

          template: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          version: true,
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
  @swagger.ApiOkResponse({ type: Entity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("EntityService", "deleteEntity")
  async deleteEntity(
    @common.Param() params: EntityWhereUniqueInput
  ): Promise<Entity | null> {
    try {
      return await this.service.deleteEntity({
        where: params,
        select: {
          agent: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          displayName: true,
          id: true,
          name: true,

          owner: {
            select: {
              id: true,
            },
          },

          representation: {
            select: {
              id: true,
            },
          },

          template: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          version: true,
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

  @common.Get("/:id/PredecessorAssociations")
  @ApiNestedQuery(AssociationFindManyArgs)
  @GrpcMethod("EntityService", "findManyPredecessorAssociations")
  async findManyPredecessorAssociations(
    @common.Req() request: Request,
    @common.Param() params: EntityWhereUniqueInput
  ): Promise<Association[]> {
    const query = plainToClass(AssociationFindManyArgs, request.query);
    const results = await this.service.findPredecessorAssociations(params.id, {
      ...query,
      select: {
        ascendant: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        descendant: {
          select: {
            id: true,
          },
        },

        description: true,
        displayName: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/PredecessorAssociations")
  @GrpcMethod("EntityService", "connectPredecessorAssociations")
  async connectPredecessorAssociations(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: AssociationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      PredecessorAssociations: {
        connect: body,
      },
    };
    await this.service.updateEntity({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/PredecessorAssociations")
  @GrpcMethod("EntityService", "updatePredecessorAssociations")
  async updatePredecessorAssociations(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: AssociationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      PredecessorAssociations: {
        set: body,
      },
    };
    await this.service.updateEntity({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/PredecessorAssociations")
  @GrpcMethod("EntityService", "disconnectPredecessorAssociations")
  async disconnectPredecessorAssociations(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: AssociationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      PredecessorAssociations: {
        disconnect: body,
      },
    };
    await this.service.updateEntity({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/successorAssociations")
  @ApiNestedQuery(AssociationFindManyArgs)
  @GrpcMethod("EntityService", "findManySuccessorAssociations")
  async findManySuccessorAssociations(
    @common.Req() request: Request,
    @common.Param() params: EntityWhereUniqueInput
  ): Promise<Association[]> {
    const query = plainToClass(AssociationFindManyArgs, request.query);
    const results = await this.service.findSuccessorAssociations(params.id, {
      ...query,
      select: {
        ascendant: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        descendant: {
          select: {
            id: true,
          },
        },

        description: true,
        displayName: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/successorAssociations")
  @GrpcMethod("EntityService", "connectSuccessorAssociations")
  async connectSuccessorAssociations(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: AssociationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      successorAssociations: {
        connect: body,
      },
    };
    await this.service.updateEntity({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/successorAssociations")
  @GrpcMethod("EntityService", "updateSuccessorAssociations")
  async updateSuccessorAssociations(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: AssociationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      successorAssociations: {
        set: body,
      },
    };
    await this.service.updateEntity({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/successorAssociations")
  @GrpcMethod("EntityService", "disconnectSuccessorAssociations")
  async disconnectSuccessorAssociations(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: AssociationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      successorAssociations: {
        disconnect: body,
      },
    };
    await this.service.updateEntity({
      where: params,
      data,
      select: { id: true },
    });
  }
}