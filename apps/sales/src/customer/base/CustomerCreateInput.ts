/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AddressCreateNestedManyWithoutCustomersInput } from "./AddressCreateNestedManyWithoutCustomersInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ProposalCreateNestedManyWithoutCustomersInput } from "./ProposalCreateNestedManyWithoutCustomersInput";

@InputType()
class CustomerCreateInput {
  @ApiProperty({
    required: false,
    type: () => AddressCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => AddressCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => AddressCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  addresses?: AddressCreateNestedManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: () => ProposalCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => ProposalCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => ProposalCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  proposals?: ProposalCreateNestedManyWithoutCustomersInput;
}

export { CustomerCreateInput as CustomerCreateInput };