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
import { BusinessCreateInput } from "./BusinessCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateBusinessArgs {
  @ApiProperty({
    required: true,
    type: () => BusinessCreateInput,
  })
  @ValidateNested()
  @Type(() => BusinessCreateInput)
  @Field(() => BusinessCreateInput, { nullable: false })
  data!: BusinessCreateInput;
}

export { CreateBusinessArgs as CreateBusinessArgs };