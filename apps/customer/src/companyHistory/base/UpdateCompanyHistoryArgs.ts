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
import { CompanyHistoryWhereUniqueInput } from "./CompanyHistoryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CompanyHistoryUpdateInput } from "./CompanyHistoryUpdateInput";

@ArgsType()
class UpdateCompanyHistoryArgs {
  @ApiProperty({
    required: true,
    type: () => CompanyHistoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CompanyHistoryWhereUniqueInput)
  @Field(() => CompanyHistoryWhereUniqueInput, { nullable: false })
  where!: CompanyHistoryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CompanyHistoryUpdateInput,
  })
  @ValidateNested()
  @Type(() => CompanyHistoryUpdateInput)
  @Field(() => CompanyHistoryUpdateInput, { nullable: false })
  data!: CompanyHistoryUpdateInput;
}

export { UpdateCompanyHistoryArgs as UpdateCompanyHistoryArgs };
