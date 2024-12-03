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
import { UomCategoryWhereUniqueInput } from "./UomCategoryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteUomCategoryArgs {
  @ApiProperty({
    required: true,
    type: () => UomCategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UomCategoryWhereUniqueInput)
  @Field(() => UomCategoryWhereUniqueInput, { nullable: false })
  where!: UomCategoryWhereUniqueInput;
}

export { DeleteUomCategoryArgs as DeleteUomCategoryArgs };
