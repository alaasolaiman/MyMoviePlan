package com.mymovieplan.repositories;

import org.springframework.data.repository.CrudRepository;

import com.mymovieplan.model.User;

public interface UserRepo extends CrudRepository<User, Long>{

}
