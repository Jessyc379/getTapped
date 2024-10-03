package com.niantic.data;

import com.niantic.models.Brewery;

import java.util.List;

public interface BreweryDao {

    List<Brewery> getBreweries();

    Brewery getBreweryById(int id);

    Brewery addBrewery(Brewery Brewery);

    void updateBrewery(int id, Brewery brewery);

    void deleteBrewery(int id);
}
