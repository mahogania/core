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
import { LocationProfileWhereInput } from "./LocationProfileWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class LocationProfileCountArgs {
  @ApiProperty({
    required: false,
    type: () => LocationProfileWhereInput,
  })
  @Field(() => LocationProfileWhereInput, { nullable: true })
  @Type(() => LocationProfileWhereInput)
  where?: LocationProfileWhereInput;
}

export { LocationProfileCountArgs as LocationProfileCountArgs };
