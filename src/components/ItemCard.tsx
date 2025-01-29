import React from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter } from "./ui/card";

type ItemStatus = "available" | "urgent" | "reserved" | "sold";

interface ItemProps {
  title: string;
  description: string;
  price: number;
  image: string;
  status: ItemStatus;
}

const statusColors: Record<ItemStatus, string> = {
  available: "bg-status-available",
  urgent: "bg-status-urgent",
  reserved: "bg-status-reserved",
  sold: "bg-status-sold",
};

const statusText: Record<ItemStatus, string> = {
  available: "Available",
  urgent: "Urgent Sale",
  reserved: "Reserved",
  sold: "Sold",
};

const ItemCard = ({ title, description, price, image, status }: ItemProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:animate-card-hover">
      <CardContent className="p-0">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">{title}</h3>
            <Badge className={`${statusColors[status]} text-white`}>
              {statusText[status]}
            </Badge>
          </div>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <p className="font-bold text-lg">${price.toFixed(2)}</p>
      </CardFooter>
    </Card>
  );
};

export default ItemCard;