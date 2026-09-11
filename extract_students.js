import fs from "node:fs";

async function run() {
  const res = await fetch('https://gtuitr.gtu.ac.in/placedStudents.aspx');
  const html = await res.text();
  
  const regex = /<div class="card i1">[\s\S]*?<img src='([^']+)'[^>]*>[\s\S]*?<p>([^<]+)<\/p>[\s\S]*?<p>([^<]+)<\/p>[\s\S]*?<p>([^<]+)<\/p>[\s\S]*?<p>([^<]+)<\/p>/g;
  let m;
  const list = [];
  while ((m = regex.exec(html)) !== null) {
    const rawImg = m[1].replace(/^\.\.\//, 'https://gtuitr.gtu.ac.in/');
    list.push({
      name: m[2].trim(),
      branch: m[3].trim(),
      company: m[4].trim(),
      package: m[5].trim(),
      image: rawImg
    });
  }
  
  console.log(`Found ${list.length} students:`);
  console.log(JSON.stringify(list, null, 2));
  fs.writeFileSync('./scratch_students.json', JSON.stringify(list, null, 2));
}

run().catch(console.error);
