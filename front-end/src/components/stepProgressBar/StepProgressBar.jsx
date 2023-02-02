import React from 'react';
import './stepProgressBar.css';

export default function StepProgressBar({ status }) {
  console.log(status);
  const verifyCurrentItem = (index) => {
    const currentItem = 'current-item';
    if ((status === 'Pendente')
     && index === '2') return currentItem;
    if (status === 'Preparando' && index === '3') return currentItem;
    if (status === 'Em Trânsito' && index === '4') return currentItem;
    if (status === 'Entregue' && index === '5') return currentItem;
    return '';
  };
  return (
    <section className="step-wizard">
      <ul className="step-wizard-list">
        <li className="step-wizard-item">
          <span className="progress-count">1</span>
          <h5 className="progress-label">Pendente</h5>
        </li>
        <li className={ `step-wizard-item ${verifyCurrentItem('2')}` }>
          <span className="progress-count">2</span>
          <h5 className="progress-label">Preparando</h5>
        </li>
        <li className={ `step-wizard-item ${verifyCurrentItem('3')}` }>
          <span className="progress-count">3</span>
          <h5 className="progress-label">A Caminho</h5>
        </li>
        <li className={ `step-wizard-item ${verifyCurrentItem('4')}` }>
          <span className="progress-count">4</span>
          <h5 className="progress-label">Entregue</h5>
        </li>
        <li className={ `last-item ${verifyCurrentItem('5')}` } />
      </ul>
    </section>
  );
}

StepProgressBar.propTypes = {}.isRequired;
