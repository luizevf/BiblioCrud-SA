package com.SA.bibliocrud.repositorio;
import com.SA.bibliocrud.entities.Livro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorioLivro extends JpaRepository<Livro, Long> {
  
}
