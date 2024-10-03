package com.niantic.models;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class Customer {

    private int customerID;
    private String favoriteBreweries;
    private String totalReviews;


}