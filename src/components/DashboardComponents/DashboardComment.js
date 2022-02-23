import React from "react";
import { AuthContext } from "context/AuthContext";
//Components
import DashboardCommentComponent from "./DashboardCommentComponent";
import BigTitle from "components/Common/BigTitle";

//UseQuery & service
import { useQuery } from "react-query";
import { getCommentsCreatedByUser } from "services/user.services";

function DashboardComment() {
  // const id = "61ef68279262e2f167700caf"; //ID user

  const getComments = useQuery(["getComments"], getCommentsCreatedByUser);
  const { data, status, error } = getComments;

  if (error === true) {
    console.log("an errror had happend");
  }

  if (status === "success") {
    console.log(data);
  }

  const renderCard = (comment) => {
    console.log("comment ", comment);

    if (comment?.placeId) {
      return (
        <DashboardCommentComponent
          images={comment?.placeId.images[0]}
          name={comment?.placeId.name}
          comment={comment.comment}
          average={comment.stars}
          type={"place"}
          id={comment.placeId._id}
        />
      );
    } else {
      return (
        <DashboardCommentComponent
          images={comment.routeId.images[0]}
          name={comment.routeId.name}
          comment={comment.comment}
          average={comment.stars}
          type={"route"}
          id={comment.routeId._id}
        />
      );
    }
  };

  return (
    <div>
      <div>
        <BigTitle bigTitleText="Comentarios" />
      </div>
      {data &&
        data.map((comment) => {
          return renderCard(comment);
        })}
    </div>
  );
}
export default DashboardComment;
