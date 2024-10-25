import { TechLogoQuiz } from "./components/Techlogoquiz";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";

import pageStyles from "./page.module.css";
import Link from "next/link";


export default function Page() {
  return (
    <main className={pageStyles.screen} style={{ flex: 1 }}>
      <section className={pageStyles.container}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "24px"
          }}
        >
          <TechLogoQuiz />
        </div>

        <Card
          headerTitle="Teste vossa habilidade"
        >
          <p style={{ marginBottom: "32px" }}>
            Teste o vosso conhecimento sobre o universo Marvel e divirta-se!
          </p>
          <p>
            FORMULÁRIO / BOTÃO
          </p>
          <Link href="/game">
            Jogar
          </Link>
        </Card>
        <Footer />
      </section>
    </main>
  )
}