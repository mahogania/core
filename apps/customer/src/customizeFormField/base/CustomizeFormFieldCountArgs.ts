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
import { CustomizeFormFieldWhereInput } from "./CustomizeFormFieldWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CustomizeFormFieldCountArgs {
  @ApiProperty({
    required: false,
    type: () => CustomizeFormFieldWhereInput,
  })
  @Field(() => CustomizeFormFieldWhereInput, { nullable: true })
  @Type(() => CustomizeFormFieldWhereInput)
  where?: CustomizeFormFieldWhereInput;
}

export { CustomizeFormFieldCountArgs as CustomizeFormFieldCountArgs };