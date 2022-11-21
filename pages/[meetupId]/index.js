import { MongoClient, ObjectId } from "mongodb";
import React from "react";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const Meetup = (props) => {
  // console.log(props.meetupData)
  const { image, title, address, description } = props.meetupData;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <MeetupDetail
        title={title}
        description={description}
        address={address}
        image={image}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@cluster0.75s2iog.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  // console.log(meetups)

  return {
    // all apths are inlcluded

    // if something is not found then 404 (fallback = true)

    // if fallback is true and page is not found, then
    // server will try to generate it
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps({ params }) {
  if (params && params.meetupId) {
    // get id of meetup
    const meetupId = params.meetupId;

    // console.log(meetupId);

    // establish connection
    const client = await MongoClient.connect(
      "mongodb+srv://admin:admin@cluster0.75s2iog.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const meetup = await meetupsCollection.findOne({
      _id: ObjectId(meetupId),
    });

    // console.log("\n\n\n");
    // console.log(meetup);

    // end connect
    client.close();

    return {
      props: {
        meetupData: {
          id: meetup._id.toString(),
          title: meetup.title,
          description: meetup.description,
          address: meetup.address,
          image: meetup.image,
        },
      },
    };
  }

  return {
    props: { error: true },
  };
}

export default Meetup;
