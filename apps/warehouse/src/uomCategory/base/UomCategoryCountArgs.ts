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
import { UomCategoryWhereInput } from "./UomCategoryWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class UomCategoryCountArgs {
  @ApiProperty({
    required: false,
    type: () => UomCategoryWhereInput,
  })
  @Field(() => UomCategoryWhereInput, { nullable: true })
  @Type(() => UomCategoryWhereInput)
  where?: UomCategoryWhereInput;
}

export { UomCategoryCountArgs as UomCategoryCountArgs };
