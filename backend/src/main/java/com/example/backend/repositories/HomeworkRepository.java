package com.example.backend.repositories;

import com.example.backend.entities.Homework;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HomeworkRepository extends JpaRepository<Homework, Long> {
    /**
     * Ищет домашнее задание по заголовку
     *
     * @param nameHomework заголовок домашнего задания
     * @return список найденных домашних заданий
     */
    List<Homework> findAllByNameContainingIgnoreCase(String nameHomework);
}
