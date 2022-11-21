import {
    MongoClient
} from "mongodb";
// /api/new-meetup

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        // console.log(data)


        // const { title, image, address, description } = data;

        const client = await MongoClient.connect('mongodb+srv://admin:admin@cluster0.75s2iog.mongodb.net/meetups?retryWrites=true&w=majority');

        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);


        console.log(result);

        client.close();
        res.status(201).json({
            message: 'Meetup inserted'
        });
    }
}

export default handler;