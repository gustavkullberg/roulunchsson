import Head from 'next/head'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import { DistanceComponent } from '../components/distanceComponent'
import { PricerangeComponent } from '../components/pricerangeComponent'
import { PreferencesComponent } from '../components/preferencesComponent'
import { ResultComponent } from '../components/resultComponent'

export type Configuration = {
  distance: number,
  hasLuxuryPricerange: boolean,
  hasMediumPricerange: boolean,
  hasPoorPricerange: boolean,
  hasMeat: boolean,
  hasBurger: boolean,
  hasSushi: boolean,
  hasVeg: boolean,
  hasPizza: boolean,
  hasFish: boolean
}
const initialState: Configuration = {
  distance: 5,
  hasLuxuryPricerange: false,
  hasMediumPricerange: true,
  hasPoorPricerange: false,
  hasMeat: true,
  hasBurger: true,
  hasSushi: true,
  hasVeg: true,
  hasFish: true,
  hasPizza: true
}

export default function Home() {
  const [stage, setStage] = useState(0);
  const [config, setConfig] = useState(initialState);

  const incrementStage = () => setStage(stage + 1);
  return (
    <div className={styles.container}>
      <Head>
        <title>Roulunchsson</title>
        <meta name="description" content="Application to choose lunch place" />
      </Head>
      <main className={styles.main}>
        {

          stage === 0 && <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><span style={{ fontSize: "80px" }}>🎰</span> <h2 className={styles.title}>ROULUNCHSSON</h2></div>
        }
        {
          stage === 1 && <DistanceComponent config={config} setConfig={setConfig} />
        }
        {stage === 2 && <PricerangeComponent config={config} setConfig={setConfig} />}
        {stage === 3 && <PreferencesComponent config={config} setConfig={setConfig} />}
        {stage > 3 && <ResultComponent config={config} />}
        {<button onClick={incrementStage} className={styles.startButton}>{buttonTexts[stage < 4 ? stage : 4]}</button>}

      </main>
    </div>
  )
}

const buttonTexts = ["Save Minutes ⏱️", "Choose Price range", "Choose Preferences", "Let's Roll 🎲", "Roll Again 🎲"]
