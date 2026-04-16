import express, { Request, Response } from "express";

const app = express();

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send({ message: "Everything is good!" });
});

app.listen(5001, () => {
  console.log("LISTENING ON PORT 5001 (PROBABLY)");
});
