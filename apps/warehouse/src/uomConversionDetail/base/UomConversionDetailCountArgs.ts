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
import { UomConversionDetailWhereInput } from "./UomConversionDetailWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class UomConversionDetailCountArgs {
  @ApiProperty({
    required: false,
    type: () => UomConversionDetailWhereInput,
  })
  @Field(() => UomConversionDetailWhereInput, { nullable: true })
  @Type(() => UomConversionDetailWhereInput)
  where?: UomConversionDetailWhereInput;
}

export { UomConversionDetailCountArgs as UomConversionDetailCountArgs };
