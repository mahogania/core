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
import { CreatureLootWhereUniqueInput } from "./CreatureLootWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CreatureLootUpdateInput } from "./CreatureLootUpdateInput";

@ArgsType()
class UpdateCreatureLootArgs {
  @ApiProperty({
    required: true,
    type: () => CreatureLootWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CreatureLootWhereUniqueInput)
  @Field(() => CreatureLootWhereUniqueInput, { nullable: false })
  where!: CreatureLootWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CreatureLootUpdateInput,
  })
  @ValidateNested()
  @Type(() => CreatureLootUpdateInput)
  @Field(() => CreatureLootUpdateInput, { nullable: false })
  data!: CreatureLootUpdateInput;
}

export { UpdateCreatureLootArgs as UpdateCreatureLootArgs };