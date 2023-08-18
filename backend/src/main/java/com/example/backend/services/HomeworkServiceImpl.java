package com.example.backend.services;

import com.example.backend.entities.Homework;
import com.example.backend.entities.Subject;
import com.example.backend.repositories.HomeworkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HomeworkServiceImpl implements HomeworkService {
    private final HomeworkRepository homeworkRepository;
    private final SubjectService subjectService;

    @Autowired
    public HomeworkServiceImpl(HomeworkRepository homeworkRepository, SubjectService subjectService) {
        this.homeworkRepository = homeworkRepository;
        this.subjectService = subjectService;
    }

    @Override
    public long createHomework(Homework homework, long subjectId) {
        Optional<Subject> optionalHomework = subjectService.findSubjectById(subjectId);
        if (optionalHomework.isPresent()) {
            Subject subject = optionalHomework.get();
            homework.setSubject(subject);
        } else {
            throw new RuntimeException("Домашнее задание не найдено");
        }

        return homeworkRepository.save(homework).getId();
    }

    @Override
    public Optional<Homework> findHomeworkById(long homeworkId) {
        return homeworkRepository.findById(homeworkId);
    }

    @Override
    public List<Homework> findAllHomeworks() {
        return homeworkRepository.findAll();
    }

    @Override
    public List<Homework> findAllHomeworksByName(String nameHomework) {
        return homeworkRepository.findAllByNameContainingIgnoreCase(nameHomework);
    }
}
