import React from "react";
import cardStyles from "./card.module.css";

interface CardProps {
  headerTitle: string;
  children: React.ReactNode;
}
export function Card(porps: CardProps) {
    return(
        <div className={cardStyles.card}>
        <header className={cardStyles.cardHeader}>
        <h1 className={cardStyles.cardHeaderTitle}>{porps.headerTitle}</h1>
        </header>
        <section className={cardStyles.cardBody}>
        {porps.children}
        </section>
        </div>
    );
}