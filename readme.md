I'm going to reach 500k RPS. Somehow...

Tools:
autocannon - request sending (a node alternative to wrk/wrk2)

benchmark_1.png - res.status(200).send({ message: "Everything is good!" });

benchmark_1_1.png - res.status(200).send()

benchmark_1_2.png - res.status(200).json({message:"hi"})

benchmark_1_3.png - previous one + logging "received"

benchmark_1_4.png - longer logging message - doesn't seem to be an issue
