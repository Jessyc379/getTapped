package com.niantic.models;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class CustomerFavorites {

    private int favoriteId;
    private int customerId;
    private int breweryId;

    public CustomerFavorites(int favoriteId, int customerId, String breweryId) {
    }


    public int getCustomerId() {
        return 0;
    }

    public String getBreweryId() {
        return "";
    }
}
