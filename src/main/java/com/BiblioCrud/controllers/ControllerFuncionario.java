package com.BiblioCrud.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BiblioCrud.repositorio.RepositorioFuncionario;
import com.BiblioCrud.services.ServiceUsuario;


@RestController
@RequestMapping(value = "/funcionarios")
public class ControllerFuncionario<Funcionario> {

  @Autowired
  private RepositorioFuncionario repositorioFuncionario;

  @GetMapping
  public List<funcionario> findAll() {
    List<funcionario> result = repositorioFuncionario.findAll();
    return result;

  }

  @PostMapping
  public Funcionario insert(@RequestBody Funcionario funcionario) {
    Funcionario result = repositorioFuncionario.save(funcionario);
    return result;
  }
}