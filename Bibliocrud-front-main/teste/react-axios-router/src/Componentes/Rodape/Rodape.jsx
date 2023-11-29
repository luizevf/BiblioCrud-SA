import React from 'react';

// Componente de Rodapé
const Rodape = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2023 Blibliocrud</p>
    </footer>
  );
};

// Estilos do Rodapé
const styles = {
  footer: {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
};

export default Rodape;
