package com.example.backend.services;

import com.example.backend.entities.Homework;

import java.util.List;
import java.util.Optional;

public interface HomeworkService {
    /**
     * Создает домашнее задание
     *
     * @param homework объект домашнего задания
     * @param subjectId id предмета
     * @return созданный объект домашнего задания
     */
    long createHomework(Homework homework, long subjectId);

    /**
     * Ищет домашнее задание по id
     *
     * @param homeworkId id домашнего задания
     * @return домашнее задание с указанным id
     */
    Optional<Homework> findHomeworkById(long homeworkId);

    /**
     * Ищет все имеющиеся домашние задания
     *
     * @return список всех домащних заданий
     */
    List<Homework> findAllHomeworks();

    /**
     * Ищет домашние задания по заголовку
     *
     * @param nameHomework заголовок домашнего задания
     * @return список домашних заданий с указанным заголовком
     */
    List<Homework> findAllHomeworksByName(String nameHomework);
}
