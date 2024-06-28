import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Feature 2. Klasse Calculator: Methoden zur Berechnung der Leistung P
class Calculator {
  pAusUundI(u, i) {
    return u * i;
  }

  pAusUundR(u, r) {
    return (u * u) / r;
  }

  pAusIundR(i, r) {
    return i * i * r;
  }

  // Feature 3. Klasse Calculator: Methoden zur Berechnung der Spannung U
  uAusPundI(p, i) {
    return p / i;
  }

  uAusPundR(p, r) {
    return Math.sqrt(p * r);
  }

  uAusIundR(i, r) {
    return i * r;
  }

  // Feature 4. Klasse Calculator: Methoden zur Berechnung der Stromstärke I
  iAusPundU(p, u) {
    return p / u;
  }

  iAusPundR(p, r) {
    return Math.sqrt(p / r);
  }

  iAusUundR(u, r) {
    return u / r;
  }

  // Feature 5. Klasse Calculator: Methoden zur Berechnung des Widerstandes R
  rAusPundU(p, u) {
    return (u * u) / p;
  }

  rAusPundI(p, i) {
    return p / (i * i);
  }

  rAusUundI(u, i) {
    return u / i;
  }
}

function App() {
  const [u, setU] = useState('');
  const [i, setI] = useState('');
  const [r, setR] = useState('');
  const [p, setP] = useState('');
  const [warning, setWarning] = useState('');
  const calculator = new Calculator();

  const handleCalculate = () => {
    // Feature 7. Geben Sie eine Warnung aus, wenn mehr als zwei Grössen eingegeben wurden
    const inputs = [u, i, r, p].filter(value => value !== '').length;
    if (inputs > 2) {
      setWarning('Bitte geben Sie nur zwei Werte ein.');
      return;
    } else {
      setWarning('');
    }

    // Feature 6. Aufruf der richtigen Funktionen abhängig von den eingegebenen Grössen
    if (u !== '' && i !== '') {
      const rValue = calculator.rAusUundI(parseFloat(u), parseFloat(i));
      const pValue = calculator.pAusUundI(parseFloat(u), parseFloat(i));
      setR(rValue);
      setP(pValue);
      console.log(`Berechnete Werte: R = ${rValue}, P = ${pValue}`);
    } else if (u !== '' && r !== '') {
      const iValue = calculator.iAusUundR(parseFloat(u), parseFloat(r));
      const pValue = calculator.pAusUundR(parseFloat(u), parseFloat(r));
      setI(iValue);
      setP(pValue);
      console.log(`Berechnete Werte: I = ${iValue}, P = ${pValue}`);
    } else if (i !== '' && r !== '') {
      const uValue = calculator.uAusIundR(parseFloat(i), parseFloat(r));
      const pValue = calculator.pAusIundR(parseFloat(i), parseFloat(r));
      setU(uValue);
      setP(pValue);
      console.log(`Berechnete Werte: U = ${uValue}, P = ${pValue}`);
    } else if (p !== '' && u !== '') {
      const iValue = calculator.iAusPundU(parseFloat(p), parseFloat(u));
      const rValue = calculator.rAusPundU(parseFloat(p), parseFloat(u));
      setI(iValue);
      setR(rValue);
      console.log(`Berechnete Werte: I = ${iValue}, R = ${rValue}`);
    } else if (p !== '' && i !== '') {
      const uValue = calculator.uAusPundI(parseFloat(p), parseFloat(i));
      const rValue = calculator.rAusPundI(parseFloat(p), parseFloat(i));
      setU(uValue);
      setR(rValue);
      console.log(`Berechnete Werte: U = ${uValue}, R = ${rValue}`);
    } else if (p !== '' && r !== '') {
      const uValue = calculator.uAusPundR(parseFloat(p), parseFloat(r));
      const iValue = calculator.iAusPundR(parseFloat(p), parseFloat(r));
      setU(uValue);
      setI(iValue);
      console.log(`Berechnete Werte: U = ${uValue}, I = ${iValue}`);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <label>
            U (Spannung):
            <input type="number" value={u} onChange={e => setU(e.target.value)} />
          </label>
          <label>
            I (Stromstärke):
            <input type="number" value={i} onChange={e => setI(e.target.value)} />
          </label>
          <label>
            R (Widerstand):
            <input type="number" value={r} onChange={e => setR(e.target.value)} />
          </label>
          <label>
            P (Leistung):
            <input type="number" value={p} onChange={e => setP(e.target.value)} />
          </label>
        </div>
        <button onClick={handleCalculate}>Berechnen</button>
        {warning && <p style={{ color: 'red' }}>{warning}</p>}
        <div>
          <p style={{ color: 'red' }}>U: {u}</p>
          <p style={{ color: 'red' }}>I: {i}</p>
          <p style={{ color: 'red' }}>R: {r}</p>
          <p style={{ color: 'red' }}>P: {p}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
