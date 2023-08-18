package com.example.backend.services;

import com.example.backend.entities.Subject;

import java.util.List;
import java.util.Optional;

public interface SubjectService {
    /**
     * Ищет все предметы
     *
     * @return
     */
    List<Subject> findAllSubjects();

    /**
     * Ищет все предметы с заданным id курса
     *
     * @param courseId id курса
     * @return список найденных предметов
     */
    List<Subject> findAllSubjectsByCourseId(long courseId);

    /**
     * Ищет предмет с заданным id
     *
     * @param subjectId id предмета
     * @return предмет с заданным id
     */
    Optional<Subject> findSubjectById(long subjectId);
}
