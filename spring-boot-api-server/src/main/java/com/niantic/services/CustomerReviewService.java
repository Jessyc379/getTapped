package com.niantic.services;

import com.niantic.data.CustomerDao;
import com.niantic.data.CustomerReviewsDao;
import com.niantic.data.UserDao;
import com.niantic.models.Customer;
import com.niantic.models.CustomerReviews;
import com.niantic.models.CustomerReviewsResponse;
import com.niantic.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class CustomerReviewService {
    private final CustomerDao customerDao;
    private final CustomerReviewsDao customerReviewsDao;
    private final UserDao userDao;

    @Autowired
    public CustomerReviewService(CustomerDao customerDao,
                                 CustomerReviewsDao customerReviewsDao,
                                 UserDao userDao) {
        this.customerDao = customerDao;
        this.customerReviewsDao = customerReviewsDao;
        this.userDao = userDao;
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

        return new CustomerReviewsResponse(
                user.getUsername(),
                user.getRole(),
                customer.getFavoriteBreweries(),
                reviews
        );
    }
}
