/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CreatureModelInfoWhereUniqueInput } from "./CreatureModelInfoWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CreatureModelInfoUpdateInput } from "./CreatureModelInfoUpdateInput";

@ArgsType()
class UpdateCreatureModelInfoArgs {
  @ApiProperty({
    required: true,
    type: () => CreatureModelInfoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CreatureModelInfoWhereUniqueInput)
  @Field(() => CreatureModelInfoWhereUniqueInput, { nullable: false })
  where!: CreatureModelInfoWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CreatureModelInfoUpdateInput,
  })
  @ValidateNested()
  @Type(() => CreatureModelInfoUpdateInput)
  @Field(() => CreatureModelInfoUpdateInput, { nullable: false })
  data!: CreatureModelInfoUpdateInput;
}

export { UpdateCreatureModelInfoArgs as UpdateCreatureModelInfoArgs };
