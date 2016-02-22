# Scenari di test

## Fattori di carico

- invocazione API di scrittura
- invocazioni / subscription API di lettura

## Sistemi sollecitati

- api gateway
- lambda functions
- kinesis
- mongodb
- backend meteor

## Scenari di stress fissi

* 10, 100, 1000 subscriber concorrenti
* 10, 100, 1000 scritture al minuto

Combinazioni:

* [10, 10]     : basso carico in lettura, basso carico in scrittura
* [10, 100]    : basso carico in lettura, medio carico in scrittura
* [10, 1000]   : basso carico in lettura, alto carico in scrittura

* [100, 10]    : medio carico in lettura, basso carico in scrittura
* [100, 100]   : medio carico in lettura, medio carico in scrittura
* [100, 1000]  : medio carico in lettura, alto carico in scrittura

* [1000, 10]   : alto carico in lettura, basso carico in scrittura
* [1000, 100]  : alto carico in lettura, medio carico in scrittura
* [1000, 1000] : alto carico in lettura, alto carico in scrittura

## Scenari di stress incrementali

Partendo da 0 a n utenti concorrenti fino a quando le soglie vengono sorpassate.
