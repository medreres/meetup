import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import NewMeatupForm from "../components/meetups/NewMeetupForm";

const Metuupd = () => {
  const router = useRouter();
  async function addMeetupHandler(enteredData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    // console.log(data);
    router.push("/");
  }
  return (
    <>
      <Head>
        <title>New Meetup</title>
        <meta name='description' content="Add a new meetup" />
      </Head>
      <NewMeatupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default Metuupd;
