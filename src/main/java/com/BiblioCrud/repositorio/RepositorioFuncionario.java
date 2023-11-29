package com.BiblioCrud.repositorio;


import java.util.List;
import com.BiblioCrud.entities.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;

public class RepositorioFuncionario extends JpaRepository<Funcionario, Long> {

	public List<Funcionario> findAll() {
		return null;
	}

	public Funcionario save(Funcionario funcionario) {
		return null;
	}
  
}
