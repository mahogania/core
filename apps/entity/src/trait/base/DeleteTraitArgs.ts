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
import { TraitWhereUniqueInput } from "./TraitWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteTraitArgs {
  @ApiProperty({
    required: true,
    type: () => TraitWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TraitWhereUniqueInput)
  @Field(() => TraitWhereUniqueInput, { nullable: false })
  where!: TraitWhereUniqueInput;
}

export { DeleteTraitArgs as DeleteTraitArgs };