import React from "react";
import "./UserItem.css";
import Avatar from "../../shared/components/UIElements/Avatar/Avatar";
import { NavLink } from "react-router-dom";
import Card from "../../shared/components/UIElements/Card/Card";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <NavLink to={`/u${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name}></Avatar>
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "place" : "places"}
            </h3>
          </div>
        </NavLink>
      </Card>
    </li>
  );
};

export default UserItem;
