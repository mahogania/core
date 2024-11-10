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
import { TraitService } from "../trait.service";
import { TraitCreateInput } from "./TraitCreateInput";
import { Trait } from "./Trait";
import { TraitFindManyArgs } from "./TraitFindManyArgs";
import { TraitWhereUniqueInput } from "./TraitWhereUniqueInput";
import { TraitUpdateInput } from "./TraitUpdateInput";
import { CommandFindManyArgs } from "../../command/base/CommandFindManyArgs";
import { Command } from "../../command/base/Command";
import { CommandWhereUniqueInput } from "../../command/base/CommandWhereUniqueInput";
import { FragmentFindManyArgs } from "../../fragment/base/FragmentFindManyArgs";
import { Fragment } from "../../fragment/base/Fragment";
import { FragmentWhereUniqueInput } from "../../fragment/base/FragmentWhereUniqueInput";

export class TraitControllerBase {
  constructor(protected readonly service: TraitService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Trait })
  @swagger.ApiBody({
    type: TraitCreateInput,
  })
  async createTrait(@common.Body() data: TraitCreateInput): Promise<Trait> {
    return await this.service.createTrait({
      data: {
        ...data,

        template: data.template
          ? {
              connect: data.template,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        template: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Trait] })
  @ApiNestedQuery(TraitFindManyArgs)
  async traits(@common.Req() request: Request): Promise<Trait[]> {
    const args = plainToClass(TraitFindManyArgs, request.query);
    return this.service.traits({
      ...args,
      select: {
        createdAt: true,
        id: true,

        template: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Trait })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async trait(
    @common.Param() params: TraitWhereUniqueInput
  ): Promise<Trait | null> {
    const result = await this.service.trait({
      where: params,
      select: {
        createdAt: true,
        id: true,

        template: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: Trait })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: TraitUpdateInput,
  })
  async updateTrait(
    @common.Param() params: TraitWhereUniqueInput,
    @common.Body() data: TraitUpdateInput
  ): Promise<Trait | null> {
    try {
      return await this.service.updateTrait({
        where: params,
        data: {
          ...data,

          template: data.template
            ? {
                connect: data.template,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          template: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: Trait })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTrait(
    @common.Param() params: TraitWhereUniqueInput
  ): Promise<Trait | null> {
    try {
      return await this.service.deleteTrait({
        where: params,
        select: {
          createdAt: true,
          id: true,

          template: {
            select: {
              id: true,
            },
          },

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

  @common.Get("/:id/commands")
  @ApiNestedQuery(CommandFindManyArgs)
  async findCommands(
    @common.Req() request: Request,
    @common.Param() params: TraitWhereUniqueInput
  ): Promise<Command[]> {
    const query = plainToClass(CommandFindManyArgs, request.query);
    const results = await this.service.findCommands(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        processor: {
          select: {
            id: true,
          },
        },

        trait: {
          select: {
            id: true,
          },
        },

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

  @common.Post("/:id/commands")
  async connectCommands(
    @common.Param() params: TraitWhereUniqueInput,
    @common.Body() body: CommandWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      commands: {
        connect: body,
      },
    };
    await this.service.updateTrait({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/commands")
  async updateCommands(
    @common.Param() params: TraitWhereUniqueInput,
    @common.Body() body: CommandWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      commands: {
        set: body,
      },
    };
    await this.service.updateTrait({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/commands")
  async disconnectCommands(
    @common.Param() params: TraitWhereUniqueInput,
    @common.Body() body: CommandWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      commands: {
        disconnect: body,
      },
    };
    await this.service.updateTrait({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/fragments")
  @ApiNestedQuery(FragmentFindManyArgs)
  async findFragments(
    @common.Req() request: Request,
    @common.Param() params: TraitWhereUniqueInput
  ): Promise<Fragment[]> {
    const query = plainToClass(FragmentFindManyArgs, request.query);
    const results = await this.service.findFragments(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        displayName: true,
        id: true,
        name: true,

        trait: {
          select: {
            id: true,
          },
        },

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

  @common.Post("/:id/fragments")
  async connectFragments(
    @common.Param() params: TraitWhereUniqueInput,
    @common.Body() body: FragmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      fragments: {
        connect: body,
      },
    };
    await this.service.updateTrait({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/fragments")
  async updateFragments(
    @common.Param() params: TraitWhereUniqueInput,
    @common.Body() body: FragmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      fragments: {
        set: body,
      },
    };
    await this.service.updateTrait({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/fragments")
  async disconnectFragments(
    @common.Param() params: TraitWhereUniqueInput,
    @common.Body() body: FragmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      fragments: {
        disconnect: body,
      },
    };
    await this.service.updateTrait({
      where: params,
      data,
      select: { id: true },
    });
  }
}
