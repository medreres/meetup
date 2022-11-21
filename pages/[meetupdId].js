import React from "react";
import MeetupDetail from "../components/meetups/MeetupDetail";

const Meetup = (props) => {
  const { image, title, id, address, description } = props.meetupData;
  return (
    <MeetupDetail
      id={id}
      key={id}
      title={title}
      description={description}
      address={address}
      image={image}
    />
  );
};

export async function getStaticPaths() {
  return {
    // all apths are inlcluded

    // if something is not found then 404 (fallback = true)

    // if fallback is true and page is not found, then
    // server will try to generate it
    fallback: true,
    paths: [
      {
        params: {
          meetupdId: "m1",
        },
      },
      {
        params: {
          meetupdId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // console.log(context.params.meetupdId);
  return {
    props: {
      meetupData: {
        id: context.params.meetupdId,
        title: "A Second Meetup",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        address: "Shelestovych, 8",
        description: "meetiup",
      },
    },
  };
}

export default Meetup;
