package com.niantic.data;
import com.niantic.models.CustomerFavorites;

import java.util.List;

public interface CustomerFavoritesDao {

    List<CustomerFavorites> getCustomerFavorites();

    CustomerFavorites getCustomerFavorite(int favoriteId);

    CustomerFavorites addCustomerFavorite(CustomerFavorites customerFavorite);

    void updateCustomerFavorite(int favoriteId, CustomerFavorites customerFavorite);

    void deleteCustomerFavorite(int favoriteId);
}

