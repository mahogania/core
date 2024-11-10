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
import { BomUpdateLogWhereUniqueInput } from "./BomUpdateLogWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BomUpdateLogUpdateInput } from "./BomUpdateLogUpdateInput";

@ArgsType()
class UpdateBomUpdateLogArgs {
  @ApiProperty({
    required: true,
    type: () => BomUpdateLogWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BomUpdateLogWhereUniqueInput)
  @Field(() => BomUpdateLogWhereUniqueInput, { nullable: false })
  where!: BomUpdateLogWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BomUpdateLogUpdateInput,
  })
  @ValidateNested()
  @Type(() => BomUpdateLogUpdateInput)
  @Field(() => BomUpdateLogUpdateInput, { nullable: false })
  data!: BomUpdateLogUpdateInput;
}

export { UpdateBomUpdateLogArgs as UpdateBomUpdateLogArgs };
