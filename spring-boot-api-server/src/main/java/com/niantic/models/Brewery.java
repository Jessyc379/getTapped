package com.niantic.models;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Setter;
import lombok.Getter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Brewery {

private String breweryId;
private String name;
private String breweryType;
private String address1;
private String address2;
private String address3;
private String city;
private String stateProvince;
private String postalCode;
private String country;
private Double longitude;
private Double latitude;
private String phone;
private String websiteUrl;
private int brewerId;

}
