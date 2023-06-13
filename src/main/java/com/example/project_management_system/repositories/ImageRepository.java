package com.example.project_management_system.repositories;

import com.example.project_management_system.entities.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Long> {}
