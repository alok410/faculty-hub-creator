import fs from "node:fs";
import path from "node:path";

const students = JSON.parse(fs.readFileSync("./scratch_students.json", "utf-8"));

async function download() {
  const updated = [];
  for (const s of students) {
    const ext = path.extname(new URL(s.image).pathname) || ".png";
    const slug = s.name.toLowerCase().replace(/[^a-z0-9]/g, "-") + ext;
    const localRel = `/placed-students/${slug}`;
    const localAbs = path.join(process.cwd(), "public", "placed-students", slug);

    try {
      console.log(`Downloading ${s.name} from ${s.image}...`);
      const res = await fetch(s.image);
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(localAbs, buf);
        updated.push({ ...s, image: localRel, fallbackImage: s.image });
        console.log(`Saved to ${localRel} (${buf.length} bytes)`);
      } else {
        console.warn(`Failed ${res.status}: ${s.image}`);
        updated.push({ ...s, image: s.image });
      }
    } catch (e) {
      console.error(`Error downloading ${s.name}:`, e.message);
      updated.push({ ...s, image: s.image });
    }
  }

  fs.writeFileSync("./src/content/placed-students.json", JSON.stringify(updated, null, 2));
  console.log("Done saving to ./src/content/placed-students.json");
}

download().catch(console.error);
