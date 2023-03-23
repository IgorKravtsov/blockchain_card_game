import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { IRoom } from "src/shared/types/room.interface";
import { useNavigate } from "react-router-dom";
import { routes } from "src/shared/constants/routes";

interface RoomCardProps {
  room: Omit<IRoom, "rounds">;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const navigate = useNavigate();

  const handleConnect = () => navigate(routes.Round.Id(room.signature));

  return (
    <Card className="w-96">
      <CardHeader color="blue" className="relative h-56">
        <img
          src="https://www.material-tailwind.com/_next/image?url=%2Fimg%2Fblog.jpg&w=1920&q=75"
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {room.owner}
        </Typography>
        <Typography>{room.bet}</Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">{room.ownerBalance}</Typography>
        <Button onClick={handleConnect}>Connect</Button>
      </CardFooter>
    </Card>
  );
};
