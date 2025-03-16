import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
    const filePath = path.join(process.cwd(), "/public/files/cv.pdf");
    const file = fs.readFileSync(filePath);
    const stat = fs.statSync(filePath);

    return new NextResponse(file, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": "inline; filename=muhittin-dari-cv.pdf",
            "Content-Length": stat.size.toString(),
        },
    });
} 