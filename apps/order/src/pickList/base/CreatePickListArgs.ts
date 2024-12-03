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
import { PickListCreateInput } from "./PickListCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreatePickListArgs {
  @ApiProperty({
    required: true,
    type: () => PickListCreateInput,
  })
  @ValidateNested()
  @Type(() => PickListCreateInput)
  @Field(() => PickListCreateInput, { nullable: false })
  data!: PickListCreateInput;
}

export { CreatePickListArgs as CreatePickListArgs };
