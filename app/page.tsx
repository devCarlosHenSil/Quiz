"use client";
import { useRouter } from "next/navigation";

//import { TechLogoQuiz } from "./components/Techlogoquiz";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";

import pageStyles from "./page.module.css";
export default function Page() {
  const router = useRouter();
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
          {/*<TechLogoQuiz />*/}
        </div>

        <Card
          headerTitle="Teste o vosso conhecimento"
        >
          <p style={{ marginBottom: "32px" }}>
            Teste o seu conhecimento sobre Portugal e divirta-se!
          </p>
          <form
            onSubmit={(event) => {
              event.preventDefault();

              const name = "Carlos";
              router.push(`/game?player=${name}`)
            }}
          >
            <div style={{ marginBottom: "24px" }}>
              <input
                type="text"
                placeholder="Digite seu nome pra jogar :)"
                name="playerName"
              />
            </div>
            <button>
              Jogar
            </button>
          </form>
        </Card>
        <Footer />
      </section>
    </main>
  )
}