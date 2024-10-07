package com.niantic.models;

import java.util.List;

public class CustomerReviewsResponse {

    private String username;
    private String userRole;
    private String favoriteBreweries;
    private List<CustomerReviews> reviews;

    // Constructors
    public CustomerReviewsResponse() {}

    public CustomerReviewsResponse(String username, String userRole, String favoriteBreweries, List<CustomerReviews> reviews) {
        this.username = username;
        this.userRole = userRole;
        this.favoriteBreweries = favoriteBreweries;
        this.reviews = reviews;
    }

    // Getters and Setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }


    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

    public String getFavoriteBreweries() {
        return favoriteBreweries;
    }

    public void setFavoriteBreweries(String favoriteBreweries) {
        this.favoriteBreweries = favoriteBreweries;
    }

    public List<CustomerReviews> getReviews() {
        return reviews;
    }

    public void setReviews(List<CustomerReviews> reviews) {
        this.reviews = reviews;
    }
}

