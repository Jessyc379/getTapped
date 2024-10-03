package com.niantic.models;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Setter;
import lombok.Getter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Brewer {

    private int brewer_id;
    private int breweries_owned;

}
