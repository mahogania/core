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
import { ConnectedAppService } from "../connectedApp.service";
import { ConnectedAppCreateInput } from "./ConnectedAppCreateInput";
import { ConnectedApp } from "./ConnectedApp";
import { ConnectedAppFindManyArgs } from "./ConnectedAppFindManyArgs";
import { ConnectedAppWhereUniqueInput } from "./ConnectedAppWhereUniqueInput";
import { ConnectedAppUpdateInput } from "./ConnectedAppUpdateInput";

export class ConnectedAppControllerBase {
  constructor(protected readonly service: ConnectedAppService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ConnectedApp })
  async createConnectedApp(
    @common.Body() data: ConnectedAppCreateInput
  ): Promise<ConnectedApp> {
    return await this.service.createConnectedApp({
      data: data,
      select: {
        authorizationUri: true,
        clientId: true,
        clientSecret: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        introspectionUri: true,
        modified: true,
        modifiedBy: true,
        name: true,
        openidConfiguration: true,
        owner: true,
        providerName: true,
        redirectUri: true,
        revocationUri: true,
        tokenUri: true,
        updatedAt: true,
        userinfoUri: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ConnectedApp] })
  @ApiNestedQuery(ConnectedAppFindManyArgs)
  async connectedApps(@common.Req() request: Request): Promise<ConnectedApp[]> {
    const args = plainToClass(ConnectedAppFindManyArgs, request.query);
    return this.service.connectedApps({
      ...args,
      select: {
        authorizationUri: true,
        clientId: true,
        clientSecret: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        introspectionUri: true,
        modified: true,
        modifiedBy: true,
        name: true,
        openidConfiguration: true,
        owner: true,
        providerName: true,
        redirectUri: true,
        revocationUri: true,
        tokenUri: true,
        updatedAt: true,
        userinfoUri: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ConnectedApp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async connectedApp(
    @common.Param() params: ConnectedAppWhereUniqueInput
  ): Promise<ConnectedApp | null> {
    const result = await this.service.connectedApp({
      where: params,
      select: {
        authorizationUri: true,
        clientId: true,
        clientSecret: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        introspectionUri: true,
        modified: true,
        modifiedBy: true,
        name: true,
        openidConfiguration: true,
        owner: true,
        providerName: true,
        redirectUri: true,
        revocationUri: true,
        tokenUri: true,
        updatedAt: true,
        userinfoUri: true,
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
  @swagger.ApiOkResponse({ type: ConnectedApp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateConnectedApp(
    @common.Param() params: ConnectedAppWhereUniqueInput,
    @common.Body() data: ConnectedAppUpdateInput
  ): Promise<ConnectedApp | null> {
    try {
      return await this.service.updateConnectedApp({
        where: params,
        data: data,
        select: {
          authorizationUri: true,
          clientId: true,
          clientSecret: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          introspectionUri: true,
          modified: true,
          modifiedBy: true,
          name: true,
          openidConfiguration: true,
          owner: true,
          providerName: true,
          redirectUri: true,
          revocationUri: true,
          tokenUri: true,
          updatedAt: true,
          userinfoUri: true,
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
  @swagger.ApiOkResponse({ type: ConnectedApp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteConnectedApp(
    @common.Param() params: ConnectedAppWhereUniqueInput
  ): Promise<ConnectedApp | null> {
    try {
      return await this.service.deleteConnectedApp({
        where: params,
        select: {
          authorizationUri: true,
          clientId: true,
          clientSecret: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          introspectionUri: true,
          modified: true,
          modifiedBy: true,
          name: true,
          openidConfiguration: true,
          owner: true,
          providerName: true,
          redirectUri: true,
          revocationUri: true,
          tokenUri: true,
          updatedAt: true,
          userinfoUri: true,
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
