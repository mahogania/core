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
import { SalesTeamWhereUniqueInput } from "./SalesTeamWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SalesTeamUpdateInput } from "./SalesTeamUpdateInput";

@ArgsType()
class UpdateSalesTeamArgs {
  @ApiProperty({
    required: true,
    type: () => SalesTeamWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SalesTeamWhereUniqueInput)
  @Field(() => SalesTeamWhereUniqueInput, { nullable: false })
  where!: SalesTeamWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SalesTeamUpdateInput,
  })
  @ValidateNested()
  @Type(() => SalesTeamUpdateInput)
  @Field(() => SalesTeamUpdateInput, { nullable: false })
  data!: SalesTeamUpdateInput;
}

export { UpdateSalesTeamArgs as UpdateSalesTeamArgs };
