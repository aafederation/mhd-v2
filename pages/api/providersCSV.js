import { getSortedData } from "../../lib/getData";

export default function handler(req, res) {
  const allMHDdata = getSortedData("MHD");
  const dataToShow = allMHDdata.map((x) => ({
    org: '"' + x.org + '"',
    status: x.draft ? (x.draft ? "Draft" : "Published") : "Published",
    licenses:
      '"' +
      x.locations
        .reduce(
          (licenses, location) => licenses.concat(location.credentials),
          []
        )
        .join(", ") +
      '"',
  }));
  let csv = dataToShow
    .map((it) => {
      return Object.values(it).toString();
    })
    .join("\n");
  csv = "Provider name, Status, Licenses\n" + csv;
  res.status(200).setHeader("Content-Type", "text/csv").send(csv);
}
