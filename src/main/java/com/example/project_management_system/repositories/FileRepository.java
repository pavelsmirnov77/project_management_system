package com.example.project_management_system.repositories;

import com.example.project_management_system.entities.File;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileRepository extends JpaRepository<File, Long> {}
