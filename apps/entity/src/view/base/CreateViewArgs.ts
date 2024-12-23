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
import { ViewCreateInput } from "./ViewCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateViewArgs {
  @ApiProperty({
    required: true,
    type: () => ViewCreateInput,
  })
  @ValidateNested()
  @Type(() => ViewCreateInput)
  @Field(() => ViewCreateInput, { nullable: false })
  data!: ViewCreateInput;
}

export { CreateViewArgs as CreateViewArgs };
