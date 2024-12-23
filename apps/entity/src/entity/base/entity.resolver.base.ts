/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Entity } from "./Entity";
import { EntityCountArgs } from "./EntityCountArgs";
import { EntityFindManyArgs } from "./EntityFindManyArgs";
import { EntityFindUniqueArgs } from "./EntityFindUniqueArgs";
import { CreateEntityArgs } from "./CreateEntityArgs";
import { UpdateEntityArgs } from "./UpdateEntityArgs";
import { DeleteEntityArgs } from "./DeleteEntityArgs";
import { AssociationFindManyArgs } from "../../association/base/AssociationFindManyArgs";
import { Association } from "../../association/base/Association";
import { Agent } from "../../agent/base/Agent";
import { User } from "../../user/base/User";
import { Representation } from "../../representation/base/Representation";
import { Template } from "../../template/base/Template";
import { EntityService } from "../entity.service";
@graphql.Resolver(() => Entity)
export class EntityResolverBase {
  constructor(protected readonly service: EntityService) {}

  async _entitiesMeta(
    @graphql.Args() args: EntityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Entity])
  async entities(@graphql.Args() args: EntityFindManyArgs): Promise<Entity[]> {
    return this.service.entities(args);
  }

  @graphql.Query(() => Entity, { nullable: true })
  async entity(
    @graphql.Args() args: EntityFindUniqueArgs
  ): Promise<Entity | null> {
    const result = await this.service.entity(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Entity)
  async createEntity(@graphql.Args() args: CreateEntityArgs): Promise<Entity> {
    return await this.service.createEntity({
      ...args,
      data: {
        ...args.data,

        agent: args.data.agent
          ? {
              connect: args.data.agent,
            }
          : undefined,

        owner: args.data.owner
          ? {
              connect: args.data.owner,
            }
          : undefined,

        representation: args.data.representation
          ? {
              connect: args.data.representation,
            }
          : undefined,

        template: args.data.template
          ? {
              connect: args.data.template,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Entity)
  async updateEntity(
    @graphql.Args() args: UpdateEntityArgs
  ): Promise<Entity | null> {
    try {
      return await this.service.updateEntity({
        ...args,
        data: {
          ...args.data,

          agent: args.data.agent
            ? {
                connect: args.data.agent,
              }
            : undefined,

          owner: args.data.owner
            ? {
                connect: args.data.owner,
              }
            : undefined,

          representation: args.data.representation
            ? {
                connect: args.data.representation,
              }
            : undefined,

          template: args.data.template
            ? {
                connect: args.data.template,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Entity)
  async deleteEntity(
    @graphql.Args() args: DeleteEntityArgs
  ): Promise<Entity | null> {
    try {
      return await this.service.deleteEntity(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Association], {
    name: "predecessorAssociations",
  })
  async findPredecessorAssociations(
    @graphql.Parent() parent: Entity,
    @graphql.Args() args: AssociationFindManyArgs
  ): Promise<Association[]> {
    const results = await this.service.findPredecessorAssociations(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Association], { name: "successorAssociations" })
  async findSuccessorAssociations(
    @graphql.Parent() parent: Entity,
    @graphql.Args() args: AssociationFindManyArgs
  ): Promise<Association[]> {
    const results = await this.service.findSuccessorAssociations(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Agent, {
    nullable: true,
    name: "agent",
  })
  async getAgent(@graphql.Parent() parent: Entity): Promise<Agent | null> {
    const result = await this.service.getAgent(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "owner",
  })
  async getOwner(@graphql.Parent() parent: Entity): Promise<User | null> {
    const result = await this.service.getOwner(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Representation, {
    nullable: true,
    name: "representation",
  })
  async getRepresentation(
    @graphql.Parent() parent: Entity
  ): Promise<Representation | null> {
    const result = await this.service.getRepresentation(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Template, {
    nullable: true,
    name: "template",
  })
  async getTemplate(
    @graphql.Parent() parent: Entity
  ): Promise<Template | null> {
    const result = await this.service.getTemplate(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
