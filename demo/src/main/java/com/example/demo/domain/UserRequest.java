package com.example.demo.domain;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter

public class UserRequest {

    //if(name{} if name null, undefined, ", 0, false
    //if(name == null){} name="
    //regex

    @NotNull(message = "first name cannot be null")
    @NotBlank(message = "first name cannot be empty")
    @Pattern(regexp="[a-zA-Z]",message = "first name can only be alphabetic")
    private String firstname;

    @NotNull
    @NotBlank
    @Pattern(regexp="[a-zA-Z]")
    private String lastname;


    private String phone;


    private String email;


    @Min(value = 16, message="age less than 16")
    @Max(value = 120, message="age cannot be more than 120")
    private int age;

}
