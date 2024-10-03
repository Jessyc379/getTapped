package com.niantic.data;

import com.niantic.models.Brewery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Repository
public class MySqlBreweryDao implements BreweryDao {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public MySqlBreweryDao(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public List<Brewery> getBreweries() {
        List<Brewery> breweries = new ArrayList<>();

        String sql = """
                SELECT *
                FROM Brewery
                """;

        SqlRowSet row = jdbcTemplate.queryForRowSet(sql);

        while (row.next()) {
            String breweryId = row.getString("brewery_id");
            String breweryName = row.getString("brewery_name");
            String breweryType = row.getString("brewery_type");
            String address = row.getString("address");
            String city = row.getString("city");
            String stateProvince = row.getString("state_province");
            String postalCode = row.getString("postal_code");
            String country = row.getString("country");
            Double longitude = row.getDouble("longitude");
            Double latitude = row.getDouble("latitude");
            String phone = row.getString("phone");
            String webSiteUrl = row.getString("website_url");
            int brewerId = row.getInt("brewer_id");


            Brewery brewery = new Brewery(breweryId, breweryName, breweryType, address, city, stateProvince, postalCode, country, longitude, latitude, phone, webSiteUrl, brewerId);


            breweries.add(brewery);
        }
        return breweries;
    }

    @Override
    public Brewery getBreweryById(int id) {
        Brewery brewery = null;

        String sql = """
            SELECT *
            FROM Brewery
            WHERE brewery_id = ?
            """;

        SqlRowSet rowSet = jdbcTemplate.queryForRowSet(sql, id);

        if (rowSet.next()) {
            String breweryId = rowSet.getString("brewery_id");
            String breweryName = rowSet.getString("brewery_name");
            String breweryType = rowSet.getString("brewery_type");
            String address = rowSet.getString("address");
            String city = rowSet.getString("city");
            String stateProvince = rowSet.getString("state_province");
            String postalCode = rowSet.getString("postal_code");
            String country = rowSet.getString("country");
            Double longitude = rowSet.getDouble("longitude");
            Double latitude = rowSet.getDouble("latitude");
            String phone = rowSet.getString("phone");
            String webSiteUrl = rowSet.getString("website_url");
            int brewerId = rowSet.getInt("brewer_id");

            brewery = new Brewery(breweryId, breweryName, breweryType, address, city, stateProvince, postalCode, country, longitude, latitude, phone, webSiteUrl, brewerId);
        }

        return brewery;
    }

    @Override
    public Brewery addBrewery(Brewery brewery) {
        String sql = """
            INSERT INTO Brewery (brewery_id, brewery_name, brewery_type, address, city, state_province, postal_code, country, longitude, latitude, phone, website_url, brewer_id)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """;

        jdbcTemplate.update(sql,
                brewery.getBreweryId(),
                brewery.getBreweryName(),
                brewery.getBreweryType(),
                brewery.getAddress(),
                brewery.getCity(),
                brewery.getStateProvince(),
                brewery.getPostalCode(),
                brewery.getCountry(),
                brewery.getLongitude(),
                brewery.getLatitude(),
                brewery.getPhone(),
                brewery.getWebsiteUrl(),
                brewery.getBrewerId()
        );

        return getBreweryById(Integer.parseInt(brewery.getBreweryId()));
    }

    @Override
    public void updateBrewery(int id, Brewery brewery) {
        String sql = """
            UPDATE Brewery
            SET brewery_name = ?, brewery_type = ?, address = ?, city = ?, state_province = ?, postal_code = ?, country = ?, longitude = ?, latitude = ?, phone = ?, website_url = ?, brewer_id = ?
            WHERE brewery_id = ?
            """;

        jdbcTemplate.update(sql,
                brewery.getBreweryName(),
                brewery.getBreweryType(),
                brewery.getAddress(),
                brewery.getCity(),
                brewery.getStateProvince(),
                brewery.getPostalCode(),
                brewery.getCountry(),
                brewery.getLongitude(),
                brewery.getLatitude(),
                brewery.getPhone(),
                brewery.getWebsiteUrl(),
                brewery.getBrewerId(),
                id
        );
    }

    @Override
    public void deleteBrewery(int id) {
        String sql = """
            DELETE FROM Brewery
            WHERE brewery_id = ?
            """;

        jdbcTemplate.update(sql, id);
    }

}

