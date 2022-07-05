package com.mymovieplan.repositories;

import org.springframework.data.repository.CrudRepository;

import com.mymovieplan.model.MovieCard;

public interface MovieCardRepo extends CrudRepository<MovieCard, Integer>{

}
