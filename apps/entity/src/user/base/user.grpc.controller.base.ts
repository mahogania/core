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
import { UserService } from "../user.service";
import { UserCreateInput } from "./UserCreateInput";
import { UserWhereInput } from "./UserWhereInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserUpdateInput } from "./UserUpdateInput";
import { User } from "./User";
import { EntityFindManyArgs } from "../../entity/base/EntityFindManyArgs";
import { Entity } from "../../entity/base/Entity";
import { EntityWhereUniqueInput } from "../../entity/base/EntityWhereUniqueInput";
import { RealmFindManyArgs } from "../../realm/base/RealmFindManyArgs";
import { Realm } from "../../realm/base/Realm";
import { RealmWhereUniqueInput } from "../../realm/base/RealmWhereUniqueInput";

export class UserGrpcControllerBase {
  constructor(protected readonly service: UserService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @GrpcMethod("UserService", "createUser")
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.createUser({
      data: data,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        sessionId: true,
        supertokensId: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  @GrpcMethod("UserService", "users")
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        sessionId: true,
        supertokensId: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("UserService", "user")
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        sessionId: true,
        supertokensId: true,
        updatedAt: true,
        username: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("UserService", "updateUser")
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          roles: true,
          sessionId: true,
          supertokensId: true,
          updatedAt: true,
          username: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("UserService", "deleteUser")
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          roles: true,
          sessionId: true,
          supertokensId: true,
          updatedAt: true,
          username: true,
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

  @common.Get("/:id/entities")
  @ApiNestedQuery(EntityFindManyArgs)
  @GrpcMethod("UserService", "findManyEntities")
  async findManyEntities(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Entity[]> {
    const query = plainToClass(EntityFindManyArgs, request.query);
    const results = await this.service.findEntities(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/entities")
  @GrpcMethod("UserService", "connectEntities")
  async connectEntities(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: EntityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      entities: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/entities")
  @GrpcMethod("UserService", "updateEntities")
  async updateEntities(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: EntityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      entities: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/entities")
  @GrpcMethod("UserService", "disconnectEntities")
  async disconnectEntities(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: EntityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      entities: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/realms")
  @ApiNestedQuery(RealmFindManyArgs)
  @GrpcMethod("UserService", "findManyRealms")
  async findManyRealms(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Realm[]> {
    const query = plainToClass(RealmFindManyArgs, request.query);
    const results = await this.service.findRealms(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,

        world: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/realms")
  @GrpcMethod("UserService", "connectRealms")
  async connectRealms(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: RealmWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      realms: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/realms")
  @GrpcMethod("UserService", "updateRealms")
  async updateRealms(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: RealmWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      realms: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/realms")
  @GrpcMethod("UserService", "disconnectRealms")
  async disconnectRealms(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: RealmWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      realms: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}
