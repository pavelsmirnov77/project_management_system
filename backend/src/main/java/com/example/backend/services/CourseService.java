package com.example.backend.services;

import com.example.backend.entities.Course;

import java.util.List;
import java.util.Optional;

public interface CourseService {
    /**
     * Получает список всех курсов
     *
     * @return список учебных курсов
     */
    List<Course> findAllCourse();

    /**
     * Ищет курс с заданным id
     *
     * @param courseId id курса
     * @return курс с заданным id
     */
    Optional<Course> findCourseById(long courseId);
}
