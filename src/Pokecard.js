import React, { Component } from "react";
import "./Pokecard.css";
import { Card, Icon, Image } from "semantic-ui-react";

export default class Pokecard extends Component {
  render() {
    const { name, type, base, id } = this.props;
    return (
      <Card className="pokemon">
        

        <div className="pokemon-img">
        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} wrapped ui={false} />
          
        </div>
        <div className="pokemon-type">{type}</div>
        <div className="pokemon-base">{base}</div>
        <div className="pokemon-name">{name}</div>
      </Card>
    );
  }
}
