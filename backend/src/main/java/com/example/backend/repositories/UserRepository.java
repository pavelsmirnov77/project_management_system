package com.example.backend.repositories;

import com.example.backend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    /**
     * Ищет пользователя по логину
     *
     * @param login заданный логин пользователя
     * @return пользователь с заданным логином
     */
    Optional<User> findByLogin(String login);

    /**
     * Ищет пользователя по электронной почте
     *
     * @param email электронная почта пользователя
     * @return пользователь с заданной электронной почтой
     */
    Optional<User> findByEmail(String email);

    /**
     * Проверяет существует ли пользователь с заданным логином
     *
     * @param login заданный логин пользователя
     * @return true, если пользователь существует, иначче false
     */
    Boolean existsByLogin(String login);

    /**
     * Проверяет существует ли пользователь с заданным email
     *
     * @param email заданный email пользователя
     * @return true, если пользователь существует, иначе false
     */
    Boolean existsByEmail(String email);
}
