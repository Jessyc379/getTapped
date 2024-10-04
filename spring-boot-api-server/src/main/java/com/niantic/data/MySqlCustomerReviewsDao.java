package com.niantic.data;

import com.niantic.models.CustomerReviews;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.security.Key;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

@Repository
public class MySqlCustomerReviewDao implements CustomerReviewsDao {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public MySqlCustomerReviewDao(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }


    @Override
    public List<CustomerReviews> getCustomerReviews() {
        List<CustomerReviews> reviews = new ArrayList<>();

        String sql = """
                SELECT *
                FROM CustomerReviews;
                """;
        SqlRowSet row = jdbcTemplate.queryForRowSet(sql);

        while (row.next())
        {
            int reviewId = row.getInt("review_id");
            int customerId = row.getInt("customer_id");
            int breweryId = row.getInt("brewery_id");
            int rating = row.getInt("rating");
            String customerReview = row.getString("customer_review");
            LocalDate reviewDate = null;

            var convertDate = row.getDate("review_date");
            if(convertDate != null)
            {
                reviewDate = convertDate.toLocalDate();
            }

            CustomerReviews review = new CustomerReviews(reviewId,customerId,breweryId,rating,customerReview,reviewDate);
            reviews.add(review);
        }
        return reviews;
    }

    @Override
    public CustomerReviews getCustomerReviewById(int id) {
        CustomerReviews review = null;

        String sql = """
                SELECT review_id
                   , customer_id
                   , brewery_id
                   , rating
                   , customer_review
                   , review_date
               FROM CustomerReviews
               WHERE review_id = ?;
               """;
        SqlRowSet row = jdbcTemplate.queryForRowSet(sql, id);

        if(row.next());
        {
            int reviewId = row.getInt("review_id");
            int customerId = row.getInt("customer_id");
            int breweryId = row.getInt("brewery_id");
            int rating = row.getInt("rating");
            String customerReview = row.getString("customer_review");
            LocalDate reviewDate = null;

            var convertDate = row.getDate("review_date");
            if(convertDate != null)
            {
                reviewDate = convertDate.toLocalDate();
            }

            review = new CustomerReviews(reviewId, customerId, breweryId, rating, customerReview, reviewDate);
        }
        return review;
    }



    @Override
    public List<CustomerReviews> getReviewByCustomerId(int customerId) {

        List<CustomerReviews> reviews = new ArrayList<>();

        String sql = """
                SELECT review_id
                   , customer_id
                   , brewery_id
                   , rating
                   , customer_review
                   , review_date
               FROM CustomerReviews
               WHERE customer_id = ?;
               """;
        SqlRowSet row = jdbcTemplate.queryForRowSet(sql, customerId);

        while(row.next());
        {
            int reviewId = row.getInt("review_id");
            int breweryId = row.getInt("brewery_id");
            int rating = row.getInt("rating");
            String customerReview = row.getString("customer_review");
            LocalDate reviewDate = null;

            var convertDate = row.getDate("review_date");
            if(convertDate != null)
            {
                reviewDate = convertDate.toLocalDate();
            }

            CustomerReviews review = new CustomerReviews(reviewId,customerId,breweryId,rating,customerReview,reviewDate);
            reviews.add(review);
        }
        return reviews;


    }

    @Override
    public List<CustomerReviews> getReviewByBreweryId(int breweryId) {
        List<CustomerReviews> reviews = new ArrayList<>();

        String sql = """
                SELECT review_id
                   , customer_id
                   , brewery_id
                   , rating
                   , customer_review
                   , review_date
               FROM CustomerReviews
               WHERE brewery_id = ?;
               """;
        SqlRowSet row = jdbcTemplate.queryForRowSet(sql, breweryId);

        while(row.next());
        {
            int customerId = row.getInt("customer_id");
            int reviewId = row.getInt("review_id");
            int rating = row.getInt("rating");
            String customerReview = row.getString("customer_review");
            LocalDate reviewDate = null;

            var convertDate = row.getDate("review_date");
            if(convertDate != null)
            {
                reviewDate = convertDate.toLocalDate();
            }

            CustomerReviews review = new CustomerReviews(reviewId,customerId,breweryId,rating,customerReview,reviewDate);
            reviews.add(review);
        }
        return reviews;

    }

    @Override
    public CustomerReviews addCustomerReview(CustomerReviews customerReviews) {
        String sql = """
                INSERT INTO CustomerReviews (customer_id
                                    , brewery_id
                                    , rating
                                    , customer_review
                                    , review_date)
                 VALUES
                 (?,?,?,?,?);
                """;

        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(connection -> {
            PreparedStatement statement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            statement.setInt(1, customerReviews.getCustomerId());
            statement.setInt(2, customerReviews.getBreweryId());
            statement.setInt(3, customerReviews.getRating());
            statement.setString(4, customerReviews.getCustomerReview());
            statement.setObject(5, customerReviews.getReviewDate());
            return statement;
            }, keyHolder);
        int newId = keyHolder.getKey().intValue();

        return getCustomerReviewById(newId);
    }

    @Override
    public void updateCustomerReview(int id, CustomerReviews customerReviews) {

        String sql = """
                UPDATE CustomerReviews
                SET customer_id =?
                    , brewery_id = ?
                    , rating = ?
                    , customer_review = ?
                    , review_date = ?
                WHERE review_id = ?;
                """;

        jdbcTemplate.update(sql,
                customerReviews.getCustomerId(),
                customerReviews.getBreweryId(),
                customerReviews.getRating(),
                customerReviews.getCustomerReview(),
                customerReviews.getReviewDate(),
                id
        );

    }

    @Override
    public void deleteCustomerReview(int id) {
        String sql = """
                DELETE FROM CustomerReviews
                WHERE review_id = ?;
                """;
        jdbcTemplate.update(sql, id);

    }
}
