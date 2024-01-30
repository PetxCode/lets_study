import { Button, Card } from "flowbite-react";
import { useStudies } from "../../hooks/useStudies";
import moment from "moment";

const StudyHistoryCard = () => {
  const { data } = useStudies();

  return (
    <div className="pt-10">
      {data?.study.map((props: any) => (
        <Card className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            createdAT: {moment(props.createdAt).format("LLL")}
          </p>

          {props.isCompleted && <Button>Update</Button>}
        </Card>
      ))}
    </div>
  );
};

export default StudyHistoryCard;
