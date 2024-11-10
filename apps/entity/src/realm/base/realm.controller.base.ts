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
import { RealmService } from "../realm.service";
import { RealmCreateInput } from "./RealmCreateInput";
import { Realm } from "./Realm";
import { RealmFindManyArgs } from "./RealmFindManyArgs";
import { RealmWhereUniqueInput } from "./RealmWhereUniqueInput";
import { RealmUpdateInput } from "./RealmUpdateInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

export class RealmControllerBase {
  constructor(protected readonly service: RealmService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Realm })
  @swagger.ApiBody({
    type: RealmCreateInput,
  })
  async createRealm(@common.Body() data: RealmCreateInput): Promise<Realm> {
    return await this.service.createRealm({
      data: {
        ...data,

        world: data.world
          ? {
              connect: data.world,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Realm] })
  @ApiNestedQuery(RealmFindManyArgs)
  async realms(@common.Req() request: Request): Promise<Realm[]> {
    const args = plainToClass(RealmFindManyArgs, request.query);
    return this.service.realms({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Realm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async realm(
    @common.Param() params: RealmWhereUniqueInput
  ): Promise<Realm | null> {
    const result = await this.service.realm({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Realm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: RealmUpdateInput,
  })
  async updateRealm(
    @common.Param() params: RealmWhereUniqueInput,
    @common.Body() data: RealmUpdateInput
  ): Promise<Realm | null> {
    try {
      return await this.service.updateRealm({
        where: params,
        data: {
          ...data,

          world: data.world
            ? {
                connect: data.world,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Realm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRealm(
    @common.Param() params: RealmWhereUniqueInput
  ): Promise<Realm | null> {
    try {
      return await this.service.deleteRealm({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/users")
  @ApiNestedQuery(UserFindManyArgs)
  async findUsers(
    @common.Req() request: Request,
    @common.Param() params: RealmWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUsers(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/users")
  async connectUsers(
    @common.Param() params: RealmWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        connect: body,
      },
    };
    await this.service.updateRealm({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/users")
  async updateUsers(
    @common.Param() params: RealmWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        set: body,
      },
    };
    await this.service.updateRealm({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/users")
  async disconnectUsers(
    @common.Param() params: RealmWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        disconnect: body,
      },
    };
    await this.service.updateRealm({
      where: params,
      data,
      select: { id: true },
    });
  }
}