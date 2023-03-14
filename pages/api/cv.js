//downlaod the cv
import fs from "fs";
export default function handler(req, res) {
  console.log("start");
  const filePath = process.cwd() + "/public/files/cv.pdf";
  var file = fs.readFileSync(filePath);
  var stat = fs.statSync(filePath);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline; filename=muhittin-dari-cv.pdf");
  res.setHeader("Content-Length", stat.size);
  res.send(file);
}
