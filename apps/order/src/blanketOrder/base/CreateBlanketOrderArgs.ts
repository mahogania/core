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
import { BlanketOrderCreateInput } from "./BlanketOrderCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateBlanketOrderArgs {
  @ApiProperty({
    required: true,
    type: () => BlanketOrderCreateInput,
  })
  @ValidateNested()
  @Type(() => BlanketOrderCreateInput)
  @Field(() => BlanketOrderCreateInput, { nullable: false })
  data!: BlanketOrderCreateInput;
}

export { CreateBlanketOrderArgs as CreateBlanketOrderArgs };
