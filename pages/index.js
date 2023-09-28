import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AI Alignment @ UW</title>
        <meta name="description" content="AI Alignment at the University of Washington is a student group trying to reduce risks from advanced AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          AI Alignment @ <span style={{color: "", fontWeight: "bold"}}>UW</span>
        </h1>

        <p className={styles.info}>
          We're a student group trying to reduce {" "}
          <a href="https://www.alignmentforum.org/posts/pRkFkzwKZ2zfa3R6H/without-specific-countermeasures-the-easiest-path-to" style={{color: "#b7a57a", textDecoration: "underline"}}> 
            risks from advanced AI.  
          </a>
        </p>
        
        <p className={styles.info}>
        We run a quarterly research program where members conduct technical AI safety research, focusing on areas including mechanistic interpretability and machine honesty. We will be working closely with the {" "}
          <a href="https://www.eleuther.ai/interpretability" style={{color: "#b7a57a", textDecoration: "underline"}}> 
           EleutherAI interpretability team
          </a>.
        </p>
  
        <p className={styles.info}>
        We also run a beginner-friendly reading group covering foundational topics in AI safety
        </p>

        <p className={styles.info}>
          Express interest <a href="https://docs.google.com/forms/d/e/1FAIpQLSfNM8QiyLTALhbW9haEU_RXf8qnCdCrTSsSIaePHMU5VX7nFQ/viewform?usp=sf_link" style={{color: "#b7a57a", textDecoration: "underline"}}>here</a> and you can join our Discord at <a href='https://discord.gg/m7Egw5uc8' style={{color: "#b7a57a", textDecoration: "underline"}}>discord.gg/m7Egw5uc8</a>.
        </p>
        <p className={styles.info}>
        Feel free to send questions to <a href="mailto:dury@uw.edu" style={{color: "#b7a57a", textDecoration: "underline"}}>dury@uw.edu</a>
        </p>
      </main>
    </div>
  )
}
