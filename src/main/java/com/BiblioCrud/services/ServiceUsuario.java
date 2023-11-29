package com.SA.bibliocrud.services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SA.bibliocrud.repositorio.RepositorioUsuario;
import com.SA.bibliocrud.entities.Usuario;


@Service
public class ServiceUsuario {

  @Autowired
  private RepositorioUsuario repositorioUsuario;

  public List<Usuario> findAll() {

    return repositorioUsuario.findAll();
  }

  public Usuario save(Usuario usuario){
    return repositorioUsuario.save(usuario);
  }
    
}
