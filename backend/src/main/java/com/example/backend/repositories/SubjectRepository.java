package com.example.backend.repositories;

import com.example.backend.entities.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubjectRepository extends JpaRepository<Subject, Long> {
    /**
     * Ищет все предметы с заданным id курса
     *
     * @param courseId id курса
     * @return список всех предметов заданного курса
     */
    List<Subject> findAllByCourse_Id(long courseId);
}
