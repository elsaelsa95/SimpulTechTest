"use client"

import { useState } from "react";
import styles from "./style.module.css";
import SearchBox from "@/components/SearchBox";
import ButtonQuick from "@/components/ButtonQuick";

export default function Home() {
  const [text, setText] = useState("");
  const handleSearch = (e: string) => {
    setText(e)
  };

  return (
    <main className={styles.container}>
      <section className={styles.left}></section>
      <section className={styles.right}>
        <div className={styles.search}>
          <SearchBox
            type="text"
            placeholder=""
            value={text}
            onChange={(e: any) => {
              setText(e.target.value);
            }}
            onKeyPress={(e: any) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSearch(text);
              }
            }}
          />
        </div>
        <div className={styles.quick}>
          <ButtonQuick />
        </div>
      </section>
    </main>
  );
}
