# Scenari di utilizzo dell’applicazione

> **Premesse**
> * Assumiamo che l’utente abbia a disposizione una connessione di rete con una
>   larghezza di banda di circa 5Mib/s (varie fonti attestano attorno a questa
>   cifra il valore medio nazionale).

---

### Login + renderizzazione dashboard

#### Scenario utente

* L’utente inserisce l’indirizzo dell’app nel browser / apre l’applicazione da
  tablet
* L’app renderizza la pagina della dashboard

#### Step backend

* L'app si connette al server
* L'app effettua il login (a partire da un token precedentemente salvato)
* L'app si sottoscrive alle seguenti publication:
  * users
* Le subscription vengono tutte marcate come ready

#### SLA

| Percentile | Tempo limite |
| ---------- | ------------ |
| 90         | 3s           |
| 95         | 6s           |
| 99         | 12s          |

---

### Login + renderizzazione storico

#### Scenario

* L’utente inserisce l’indirizzo dell’app nel browser / apre l’applicazione da
  tablet
* L'app renderizza la pagina dello storico con i dati corretti

#### Step backend

* L'app si connette al server
* L'app effettua il login (a partire da un token precedentemente salvato)
* L'app si sottoscrive alle seguenti publication:
  * users
  * sites
  * alarms
  * dailyMeasuresBySensor
* Le subscription vengono tutte marcate come ready

#### SLA

| Percentile | Tempo limite |
| ---------- | ------------ |
| 90         | 4s           |
| 95         | 8s           |
| 99         | 16s          |

---

### Renderizzazione storico

#### Scenario

* L'utente a login effettuato naviga sulla pagina dello storico
* L'app renderizza la pagina dello storico con i dati corretti

#### Step backend

* L'app si sottoscrive alle seguenti publication:
  * sites
  * alarms
  * dailyMeasuresBySensor
* Le subscription vengono tutte marcate come ready

#### SLA

| Percentile | Tempo limite |
| ---------- | ------------ |
| 90         | 3s           |
| 95         | 6s           |
| 99         | 12s          |

---

### Login + renderizzazione real time

#### Scenario

* L’utente inserisce l’indirizzo dell’app nel browser / apre l’applicazione da
  tablet
* L’app renderizza la pagina del real time

#### Step backend

* L'app si sottoscrive alle seguenti publication:
  * users
  * sites
  * readingsRealTimeAggregatesBySite
* Le subscription vengono tutte marcate come ready

#### SLA

| Percentile | Tempo limite |
| ---------- | ------------ |
| 90         | 4s           |
| 95         | 8s           |
| 99         | 16s          |

---

### Renderizzazione real time

#### Scenario

* L'utente a login effettuato naviga sulla pagina del real time
* L’app renderizza la pagina del real time

#### Step backend

* L'app si sottoscrive alle seguenti publication:
  * sites
  * readingsRealTimeAggregatesBySite
* Le subscription vengono tutte marcate come ready

#### SLA

| Percentile | Tempo limite |
| ---------- | ------------ |
| 90         | 2s           |
| 95         | 4s           |
| 99         | 8s           |

---

### Definizione di soglie e valori

Le soglie al momento non hanno un razionale che le giustifica (perché %90 e non
%70 ad esempio?).

I valori limite invece sono il doppio del valore (approssimativo) misurato
svolgendo gli scenari in condizioni ottimali (pc performante, rete 12Mbps).
