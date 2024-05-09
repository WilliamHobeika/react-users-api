import { Avatar, Card, CardContent } from "@mui/material";
import { format } from "date-fns";

type UserProps = {
  avatar: string;
  createdAt: string;
  id: string;
  name: string;
};

const UserCard = ({ user }: { user: UserProps }) => {
  const formattedDate = format(
    new Date(user.createdAt),
    "MMMM dd, yyyy 'at' hh:mm a",
  );

  return (
    <Card className="w-full" variant="elevation">
      <CardContent className="flex flex-col justify-between sm:flex-row sm:items-center">
        <div className="flex items-center gap-3 ">
          <Avatar alt={user.name} src={user.avatar} />
          <h1 className="text-xl font-medium opacity-90">{user.name}</h1>
        </div>
        <p className="text-sm opacity-70">Joined: {formattedDate}</p>
      </CardContent>
    </Card>
  );
};

export default UserCard;
