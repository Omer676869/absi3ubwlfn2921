let status = "no";
let timeout = null;

export default function handler(req, res) {

  // GET /check → returns status
  if (req.url === "/check") {
    return res.json({ status });
  }

  // GET /trigger → sets yes for 1 second
  if (req.url === "/trigger") {
    status = "yes";

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      status = "no";
    }, 1000);

    return res.json({ status: "yes (auto reset in 1s)" });
  }

  res.status(404).end("Not found");
}
