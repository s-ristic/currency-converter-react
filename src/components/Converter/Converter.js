import React, { useState, useEffect, useCallback, useMemo } from 'react';

import CurrentDate from './CurrentDate';
import Currency from './Currency';
import Amount from './Amount';
import Result from './Result';
import Error from './Error';

import Button from '../ui/Button';

import styles from './Converter.module.css';

function Converter() {
  const [date, setDate] = useState('');
  const [currencies, setCurrencies] = useState([]);
  const [from, setFrom] = useState('RSD');
  const [to, setTo] = useState('EUR');
  const [amount, setAmount] = useState('');
  const [value, setValue] = useState(0);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const api_key = process.env.REACT_APP_API_KEY;

  const currenciesUrl = `https://api.currencyscoop.com/v1/currencies?type=fiat&api_key=${api_key}`;
  const convertUrl = `https://api.currencyscoop.com/v1/convert?api_key=${api_key}&from=${from}&to=${to}&amount=${amount}`;

  var controller = useMemo(() => new AbortController(), []);
  var signal = controller.signal;

  const getCurrencies = useCallback(() => {
    fetch(currenciesUrl, { signal })
      .then((response) => response.json())
      .then((data) => {
        if (data.meta.code === 200) {
          new Array(data.response.fiats).filter((currency) => {
            let allCurrencies = [];

            const rsd = currency['RSD'];
            const bam = currency['BAM'];
            const hrk = currency['HRK'];
            const huf = currency['HUF'];
            const eur = currency['EUR'];
            const usd = currency['USD'];
            const cad = currency['CAD'];
            const aud = currency['AUD'];

            allCurrencies.push(rsd, bam, hrk, huf, eur, usd, cad, aud);

            setCurrencies(allCurrencies);
            return allCurrencies;
          });
        }

        if (data.meta.code !== 200) {
          setErrorMsg(data.meta);
          setIsError(true);
        }
      })
      .catch((error) => {});

    setDate(new Date().toLocaleDateString());
  }, [currenciesUrl, signal]);

  useEffect(() => {
    getCurrencies();

    return () => controller.abort();
  }, [getCurrencies, controller]);

  const getConvert = () => {
    fetch(convertUrl, { signal })
      .then((response) => response.json())
      .then((data) => {
        if (data.meta.code === 200) {
          setValue(data.response.value);
        }

        if (data.meta.code !== 200) {
          setErrorMsg(data.meta);
          setIsError(true);
        }
      })
      .catch((error) => {});
  };

  return (
    <section className={styles.converter}>
      {date && <CurrentDate date={date} />}

      <Currency action='Convert' currencies={currencies} select={from} change={setFrom} />
      <Currency currencies={currencies} select={to} change={setTo} action='Into' />

      <Amount amount={amount} setAmount={setAmount} />

      <Button primary large label='Convert' onClick={getConvert} />

      <Result amount={amount} value={value} setValue={setValue} />

      {isError && errorMsg && <Error errorMsg={errorMsg} setIsError={setIsError} />}
    </section>
  );
}

export default Converter;
