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
import { BomWebsiteItemWhereUniqueInput } from "./BomWebsiteItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BomWebsiteItemUpdateInput } from "./BomWebsiteItemUpdateInput";

@ArgsType()
class UpdateBomWebsiteItemArgs {
  @ApiProperty({
    required: true,
    type: () => BomWebsiteItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BomWebsiteItemWhereUniqueInput)
  @Field(() => BomWebsiteItemWhereUniqueInput, { nullable: false })
  where!: BomWebsiteItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BomWebsiteItemUpdateInput,
  })
  @ValidateNested()
  @Type(() => BomWebsiteItemUpdateInput)
  @Field(() => BomWebsiteItemUpdateInput, { nullable: false })
  data!: BomWebsiteItemUpdateInput;
}

export { UpdateBomWebsiteItemArgs as UpdateBomWebsiteItemArgs };