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
import { AdvanceTaxWhereUniqueInput } from "./AdvanceTaxWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AdvanceTaxUpdateInput } from "./AdvanceTaxUpdateInput";

@ArgsType()
class UpdateAdvanceTaxArgs {
  @ApiProperty({
    required: true,
    type: () => AdvanceTaxWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AdvanceTaxWhereUniqueInput)
  @Field(() => AdvanceTaxWhereUniqueInput, { nullable: false })
  where!: AdvanceTaxWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AdvanceTaxUpdateInput,
  })
  @ValidateNested()
  @Type(() => AdvanceTaxUpdateInput)
  @Field(() => AdvanceTaxUpdateInput, { nullable: false })
  data!: AdvanceTaxUpdateInput;
}

export { UpdateAdvanceTaxArgs as UpdateAdvanceTaxArgs };
