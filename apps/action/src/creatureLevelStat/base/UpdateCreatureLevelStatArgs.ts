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
import { CreatureLevelStatWhereUniqueInput } from "./CreatureLevelStatWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CreatureLevelStatUpdateInput } from "./CreatureLevelStatUpdateInput";

@ArgsType()
class UpdateCreatureLevelStatArgs {
  @ApiProperty({
    required: true,
    type: () => CreatureLevelStatWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CreatureLevelStatWhereUniqueInput)
  @Field(() => CreatureLevelStatWhereUniqueInput, { nullable: false })
  where!: CreatureLevelStatWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CreatureLevelStatUpdateInput,
  })
  @ValidateNested()
  @Type(() => CreatureLevelStatUpdateInput)
  @Field(() => CreatureLevelStatUpdateInput, { nullable: false })
  data!: CreatureLevelStatUpdateInput;
}

export { UpdateCreatureLevelStatArgs as UpdateCreatureLevelStatArgs };
