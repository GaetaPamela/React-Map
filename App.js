import React from "react";
import Morango from "./imagens/morango.jpg";
import Lichia from "./imagens/lichia.jpg";
import Uva from "./imagens/uva.jpg";
import Manga from "./imagens/manga.jpg";
import Caqui from "./imagens/caqui.jpg";
import Mexerica from "./imagens/mexerica.jpg";

import "./styles.css";

export default class App extends React.Component {
  state = {
    saladaFrutas: [
      {
        id: 1,
        fruta: "Morango",
        img: Morango
      },

      {
        id: 2,
        fruta: "Lichia",
        img: Lichia
      },
      {
        id: 3,
        fruta: "Uva",
        img: Uva
      },
      {
        id: 4,
        fruta: "Manga",
        img: Manga
      },
      {
        id: 5,
        fruta: "Caqui",
        img: Caqui
      },
      {
        id: 6,
        fruta: "Mexerica",
        img: Mexerica
      }
    ]
  };

  render() {
    return (
      <>
        <nav>
          {this.state.saladaFrutas.map((item) => (
            <section key={item.id}>
              <ul>
                <li> {item.fruta}</li>
                <img src={item.img} alt="frutas" />
              </ul>
            </section>
          ))}
        </nav>
      </>
    );
  }
}
