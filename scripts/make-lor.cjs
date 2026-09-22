const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/docs');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Generate valid PDF
const streamContent = `BT
/F1 16 Tf
50 720 Td
(GUJARAT TECHNOLOGICAL UNIVERSITY - ITR MEHSANA) Tj
/F1 12 Tf
0 -26 Td
(CONFIDENTIAL LETTER OF RECOMMENDATION (LOR) TEMPLATE) Tj
/F1 10 Tf
0 -32 Td
(To: Admissions Committee / Graduate Selection Board / Employer) Tj
0 -20 Td
(Subject: Letter of Recommendation for [Applicant Full Name]) Tj
0 -30 Td
(I am pleased to provide this recommendation for [Student / Alumnus Name], who completed) Tj
0 -16 Td
(their Bachelor of Engineering in [Department Name] at GTU - Institute of Technology & Research.) Tj
0 -25 Td
(ACADEMIC PERFORMANCE & RESEARCH ABILITY:) Tj
0 -16 Td
(During the student's tenure at GTU-ITR, they demonstrated exceptional aptitude, strong technical) Tj
0 -16 Td
(fundamentals, and rigorous laboratory skills in applied engineering and project works.) Tj
0 -25 Td
(PROJECT WORK & LEADERSHIP:) Tj
0 -16 Td
(The candidate actively contributed to practical engineering projects, hackathons, and Siemens) Tj
0 -16 Td
(Center of Excellence training sessions, exhibiting remarkable teamwork and analytical mindset.) Tj
0 -35 Td
(FACULTY RECOMMENDER ENDORSEMENT:) Tj
0 -20 Td
(Name of Faculty / Recommender: _____________________________________________________) Tj
0 -20 Td
(Designation & Department: ___________________________________________________________) Tj
0 -20 Td
(Institution: Gujarat Technological University - ITR Mehsana, Gujarat, India) Tj
0 -20 Td
(Email Address: ___________________________ Phone: _________________________________) Tj
0 -26 Td
(Official Signature: _______________________ Date & Institutional Seal: _____________) Tj
ET`;

const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
4 0 obj
<< /Length ${Buffer.byteLength(streamContent)} >>
stream
${streamContent}
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000300 00000 n 
0000000229 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
${180 + Buffer.byteLength(streamContent) + 200}
%%EOF`;

fs.writeFileSync(path.join(dir, 'gtu-itr-lor-template.pdf'), pdf);
console.log('Successfully generated gtu-itr-lor-template.pdf');
