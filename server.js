let status = "no";
let timeout = null;

export default function handler(req, res) {
  if (req.url === "/check" && req.method === "GET") {
    return res.status(200).json({ status });
  }

  if (req.url === "/check" && req.method === "POST") {
    status = "yes";

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      status = "no";
    }, 1000);

    return res.status(200).json({ status });
  }

  res.status(404).end("Not found");
}
