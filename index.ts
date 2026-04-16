import express, { Request, Response } from "express";

const app = express();

app.get("/health", (req: Request, res: Response) => {
  console.log("received this message, keep on going!");
  res.status(200).json({ message: "hi" });
});

app.listen(5001, () => {
  console.log("LISTENING ON PORT 5001 (PROBABLY)");
});
