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
import { QuotationItemWhereUniqueInput } from "./QuotationItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { QuotationItemUpdateInput } from "./QuotationItemUpdateInput";

@ArgsType()
class UpdateQuotationItemArgs {
  @ApiProperty({
    required: true,
    type: () => QuotationItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuotationItemWhereUniqueInput)
  @Field(() => QuotationItemWhereUniqueInput, { nullable: false })
  where!: QuotationItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => QuotationItemUpdateInput,
  })
  @ValidateNested()
  @Type(() => QuotationItemUpdateInput)
  @Field(() => QuotationItemUpdateInput, { nullable: false })
  data!: QuotationItemUpdateInput;
}

export { UpdateQuotationItemArgs as UpdateQuotationItemArgs };
