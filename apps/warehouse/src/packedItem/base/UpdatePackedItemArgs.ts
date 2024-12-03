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
import { PackedItemWhereUniqueInput } from "./PackedItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PackedItemUpdateInput } from "./PackedItemUpdateInput";

@ArgsType()
class UpdatePackedItemArgs {
  @ApiProperty({
    required: true,
    type: () => PackedItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PackedItemWhereUniqueInput)
  @Field(() => PackedItemWhereUniqueInput, { nullable: false })
  where!: PackedItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PackedItemUpdateInput,
  })
  @ValidateNested()
  @Type(() => PackedItemUpdateInput)
  @Field(() => PackedItemUpdateInput, { nullable: false })
  data!: PackedItemUpdateInput;
}

export { UpdatePackedItemArgs as UpdatePackedItemArgs };
