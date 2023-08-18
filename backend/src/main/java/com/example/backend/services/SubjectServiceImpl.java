package com.example.backend.services;

import com.example.backend.entities.Subject;
import com.example.backend.repositories.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubjectServiceImpl implements SubjectService {
    private final SubjectRepository subjectRepository;

    @Autowired
    public SubjectServiceImpl(SubjectRepository subjectRepository) {
        this.subjectRepository = subjectRepository;
    }

    @Override
    public List<Subject> findAllSubjects() {
        return subjectRepository.findAll();
    }

    @Override
    public List<Subject> findAllSubjectsByCourseId(long courseId) {
        return subjectRepository.findAllByCourse_Id(courseId);
    }

    @Override
    public Optional<Subject> findSubjectById(long subjectId) {
        return subjectRepository.findById(subjectId);
    }
}
