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
import { BlanketOrderItemWhereUniqueInput } from "./BlanketOrderItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BlanketOrderItemUpdateInput } from "./BlanketOrderItemUpdateInput";

@ArgsType()
class UpdateBlanketOrderItemArgs {
  @ApiProperty({
    required: true,
    type: () => BlanketOrderItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BlanketOrderItemWhereUniqueInput)
  @Field(() => BlanketOrderItemWhereUniqueInput, { nullable: false })
  where!: BlanketOrderItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BlanketOrderItemUpdateInput,
  })
  @ValidateNested()
  @Type(() => BlanketOrderItemUpdateInput)
  @Field(() => BlanketOrderItemUpdateInput, { nullable: false })
  data!: BlanketOrderItemUpdateInput;
}

export { UpdateBlanketOrderItemArgs as UpdateBlanketOrderItemArgs };
