package com.SA.bibliocrud.repositorio;
import org.springframework.data.jpa.repository.JpaRepository;
import com.SA.bibliocrud.entities.Usuario;

public interface RepositorioUsuario extends JpaRepository<Usuario, Long> {

  
} 