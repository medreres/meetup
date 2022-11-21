import MeetupList from "../components/meetups/MeetupList";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// const MEETUPS = [
//       {
//         id: "m1",
//         title: "A First Meetup",
//         image:
//           "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
//         address: "Shelestovych, 8",
//         description: "meetiup",
//       },
//       {
//         id: "m2",
//         title: "A Second Meetup",
//         image:
//           "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
//         address: "Shelestovych, 8",
//         description: "meetiup",
//       },
//     ];

const HomePage = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />;
    </>
  );
};


// cache result
export async function getStaticProps(context) {
//  await  sleep(5000);
//  console.log('loaded')
  const MEETUPS = [
    {
      id: "m1",
      title: "A First Meetup",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
      address: "Shelestovych, 8",
      description: "meetiup",
    },
    {
      id: "m2",
      title: "A Second Meetup",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
      address: "Shelestovych, 8",
      description: "meetiup",
    },
  ];
  return {
    props: {
      meetups: MEETUPS,
    },
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;


//   // wait for response
//   await sleep(5000);
//   // then load the page
//   console.log('lol')
  
//   // fetch data from an api
  
//   return {
//     props: {
//       meetups: MEETUPS
//     }
//   }
// }

export default HomePage;
