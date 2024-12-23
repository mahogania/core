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
import { CommandService } from "../command.service";
import { CommandCreateInput } from "./CommandCreateInput";
import { CommandWhereInput } from "./CommandWhereInput";
import { CommandWhereUniqueInput } from "./CommandWhereUniqueInput";
import { CommandFindManyArgs } from "./CommandFindManyArgs";
import { CommandUpdateInput } from "./CommandUpdateInput";
import { Command } from "./Command";

export class CommandGrpcControllerBase {
  constructor(protected readonly service: CommandService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Command })
  @GrpcMethod("CommandService", "createCommand")
  async createCommand(
    @common.Body() data: CommandCreateInput
  ): Promise<Command> {
    return await this.service.createCommand({
      data: data,
      select: {
        createdAt: true,
        help: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Command] })
  @ApiNestedQuery(CommandFindManyArgs)
  @GrpcMethod("CommandService", "commands")
  async commands(@common.Req() request: Request): Promise<Command[]> {
    const args = plainToClass(CommandFindManyArgs, request.query);
    return this.service.commands({
      ...args,
      select: {
        createdAt: true,
        help: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Command })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CommandService", "command")
  async command(
    @common.Param() params: CommandWhereUniqueInput
  ): Promise<Command | null> {
    const result = await this.service.command({
      where: params,
      select: {
        createdAt: true,
        help: true,
        id: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: Command })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CommandService", "updateCommand")
  async updateCommand(
    @common.Param() params: CommandWhereUniqueInput,
    @common.Body() data: CommandUpdateInput
  ): Promise<Command | null> {
    try {
      return await this.service.updateCommand({
        where: params,
        data: data,
        select: {
          createdAt: true,
          help: true,
          id: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: Command })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CommandService", "deleteCommand")
  async deleteCommand(
    @common.Param() params: CommandWhereUniqueInput
  ): Promise<Command | null> {
    try {
      return await this.service.deleteCommand({
        where: params,
        select: {
          createdAt: true,
          help: true,
          id: true,
          name: true,
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
