import ItemCount from "./ItemCount";
import React, { useState, Link } from "react";
import {CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import { Button } from "bootstrap";

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        alert("You have selected" + qty + "items.")
    }

    return (
        <>
        {
        <div className="imagenes">
            <CardGroup>
                <Card key={item.id}>
                    <CardImg className="imagen"
                        alt="Card image cap"
                        src={item.img}/>
                    <CardBody>
                        <CardTitle tag="h5">
                            {item.nombre}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6">
                            {item.descripcion}
                        </CardSubtitle>
                        <CardText>
                            {item.precio}
                        </CardText>
                        <CardText>
                            {item.stock} unidades en stock
                        </CardText>    
                    </CardBody>

                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Events/>
                    }
                </Card>
            </CardGroup>
        </div>
        }
        </>
    );
}

export default ItemDetail;