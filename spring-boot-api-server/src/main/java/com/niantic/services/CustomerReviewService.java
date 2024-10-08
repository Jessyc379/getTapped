package com.niantic.services;

import com.niantic.data.BreweryDao;
import com.niantic.data.CustomerDao;
import com.niantic.data.CustomerReviewsDao;
import com.niantic.data.UserDao;
import com.niantic.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class CustomerReviewService {
    private final CustomerDao customerDao;
    private final CustomerReviewsDao customerReviewsDao;
    private final UserDao userDao;
    private final BreweryDao breweryDao;

    @Autowired
    public CustomerReviewService(CustomerDao customerDao,
                                 CustomerReviewsDao customerReviewsDao,
                                 UserDao userDao, BreweryDao breweryDao) {
        this.customerDao = customerDao;
        this.customerReviewsDao = customerReviewsDao;
        this.userDao = userDao;
        this.breweryDao = breweryDao;
    }

    public CustomerReviewsResponse getCustomerReviews(int customerId) {
        Customer customer = customerDao.getCustomer(customerId);
        if (customer == null) {
            throw new NoSuchElementException("Customer not found");
        }

        // Fetch user by userId from customer
        User user = userDao.getUserById(customer.getUserId());
        if (user == null) {
            throw new NoSuchElementException("User not found");
        }

        List<CustomerReviews> reviews = customerReviewsDao.getReviewByCustomerId(customerId);

        reviews.forEach(review -> {
            Brewery brewery = breweryDao.getBreweryById(review.getBreweryId());
            if (brewery != null) {
                review.setBreweryName(brewery.getBreweryName()); // Add brewery name to the review
            }
        });

        return new CustomerReviewsResponse(
                user.getUsername(),
                user.getRole(),
                customer.getFavoriteBreweries(),
                reviews
        );
    }
}
