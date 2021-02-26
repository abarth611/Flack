const { nanoid } = require("nanoid");
const db = require("../utils/db");

exports.create = async (req, res) => {
  const { name, description } = req.body;
  const channel = await db("channels")
    .insert({ name, teamId: req.team.id, description, shortid: nanoid(14) })
    .returning(["id", "name", "shortid", "description"])
    .then((row) => row[0]);
  return res.status(200).send({ channel, team: req.team });
};

exports.read = async (req, res) => {
  return res.status(200).send({ channel: req.channel });
};

exports.delete = async (req, res) => {
  await req
    .db("channels")
    .where("id", req.channel.id)
    .del();
  return res.status(200).send({ id: req.channel.id });
};