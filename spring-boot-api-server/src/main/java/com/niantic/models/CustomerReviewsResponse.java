package com.niantic.models;

import java.util.List;

public class CustomerReviewsResponse {

    private String username;
    private List<CustomerReviews> reviews;

    // Constructors
    public CustomerReviewsResponse() {}

    public CustomerReviewsResponse(String username, List<CustomerReviews> reviews) {
        this.username = username;
        this.reviews = reviews;
    }

    // Getters and Setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<CustomerReviews> getReviews() {
        return reviews;
    }

    public void setReviews(List<CustomerReviews> reviews) {
        this.reviews = reviews;
    }
}

